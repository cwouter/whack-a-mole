import styles from './Scoreboard.module.css'
import scoreboard from '../../assets/scoreboard.svg'
import { useCallback, useEffect, useRef, useState } from 'react'

interface ScoreboardProps {
    className?: string
    children?: React.ReactNode
    open?: boolean
    onOpenChange?: (open: boolean) => void
    onClose?: () => void
}

function Scoreboard({ className, children, open, onOpenChange, onClose }: ScoreboardProps) {
    const [render, setRender] = useState(false)
    const [closing, setClosing] = useState(false)
    const rootRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (open) {
            setRender(true)
            setClosing(false)
        } else if (render) {
            setClosing(true)
        } else {
            setRender(false)
        }
    }, [open, render])

    useEffect(() => {
        if (!closing) return
        const el = rootRef.current
        if (!el) return
        const onAnimEnd = (e: AnimationEvent) => {
            if (e.target === el) {
                setClosing(false)
                setRender(false)
            }
        }
        el.addEventListener('animationend', onAnimEnd)
        return () => el.removeEventListener('animationend', onAnimEnd)
    }, [closing])

    const requestClose = useCallback(() => {
        if (onOpenChange) onOpenChange(false)
        else if (onClose) setClosing(true)
    }, [onOpenChange, onClose])

    useEffect(() => {
        if (!closing || onOpenChange || !onClose) return
        const el = rootRef.current
        if (!el) return
        const afterExit = () => onClose()
        el.addEventListener('animationend', afterExit, { once: true })
        return () => el.removeEventListener('animationend', afterExit)
    }, [closing, onOpenChange, onClose])

    if (!render) return null

    const rootClass = [
        styles.scoreboard,
        closing ? styles.popOut : styles.popInZoom,
        className,
    ].filter(Boolean).join(' ')

    const innerClass = [
        styles.inner,
        !closing && styles.wobbleEarly
    ].filter(Boolean).join(' ')

    return <div ref={rootRef} className={rootClass}>
        <div className={innerClass}>
            <img className={styles.scoreboardImage} src={scoreboard} alt="scoreboard" />
            <div className={styles.scoreboardClose} onClick={requestClose}>x</div>
            <div className={styles.scoreboardContent}>{children}</div>
        </div>
    </div>
}

export default Scoreboard
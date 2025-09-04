import styles from './Viewport.module.css'

interface ViewportProps {
    width: number,
    height: number,
    children: React.ReactNode
    className?: string
}

function Viewport({ width, height, children, className }: ViewportProps) {
    return (
        <div style={{ width, height }} className={styles.viewport + (className ? ' ' + className : '')}>
            {children}
        </div>
    )
}

export default Viewport
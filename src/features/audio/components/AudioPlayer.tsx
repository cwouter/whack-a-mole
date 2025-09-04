import { useEffect, useRef } from "react"
import { useAppSelector } from "../../../hooks"

interface AudioPlayerProps {
    src: string
}

function AudioPlayer({ src }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null)
    const started = useAppSelector((state) => state.game.started)

    useEffect(() => {
        if (started) {
            audioRef.current?.play().catch(err => {
                console.error("Audio play error", err)
            })
        } else {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        }
    }, [audioRef, started])

    return <audio ref={audioRef} src={src} />
}

export default AudioPlayer
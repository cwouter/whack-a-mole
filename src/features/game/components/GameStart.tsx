import { useAppDispatch } from "../../../hooks"
import { wsSend } from "../../ws/store/wsSlice"
import styles from "./GameStart.module.css"
import { useAppSelector } from "../../../hooks"

interface GameStartProps {
    className?: string
}

function GameStart({ className }: GameStartProps) {
    const dispatch = useAppDispatch()
    const started = useAppSelector((state) => state.game.started)

    const onClick = () => {
        if (started) {
            dispatch(wsSend({ event: "game/end", payload: {} }))
        } else {
            dispatch(wsSend({ event: "game/start", payload: {} }))
        }
    }

    return <button className={styles.start + (className ? ' ' + className : '')} onClick={onClick}>
        {started ? "End Game" : "Start Game"}
    </button>
}

export default GameStart

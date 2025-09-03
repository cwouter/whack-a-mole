import { useAppDispatch } from "../../hooks"
import { wsSend } from "../ws/store/wsSlice"
import styles from "./GameStart.module.css"

interface GameStartProps {
    className?: string
}

function GameStart({ className }: GameStartProps) {
    const dispatch = useAppDispatch()
    return <button className={styles.start + (className ? ' ' + className : '')} onClick={() => dispatch(wsSend({ event: "game/start", payload: {} }))}>Start Game</button>
}

export default GameStart

import { useAppDispatch, useAppSelector } from "../../../hooks"
import { showGame, showScoreboard } from "../../app/store/appSlice"
import styles from './ScoreboardButton.module.css'


interface ScoreboardButtonProps {
    className?: string
}

function ScoreboardButton({ className }: ScoreboardButtonProps) {
    const dispatch = useAppDispatch()
    const showScoreboardState = useAppSelector((state) => state.app.showScoreboard)

    const onClick = () => {
        if (showScoreboardState) {
            dispatch(showGame())
        } else {
            dispatch(showScoreboard())
        }
    }

    return <button className={styles.scoreboardButton + (className ? ' ' + className : '')} onClick={onClick}>
        {showScoreboardState ? "Close Highscores" : "Show Highscores"}
    </button>
}

export default ScoreboardButton

import { useAppSelector } from "../../hooks"
import styles from './Score.module.css'

interface ScoreProps {
    className?: string
}

function Score({ className }: ScoreProps) {
    const score = useAppSelector(state => state.score.value)

    return <div className={styles.score + (className ? ' ' + className : '')}>Score: {score}</div>
}

export default Score
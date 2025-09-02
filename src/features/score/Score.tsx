import { useAppSelector } from "../../hooks"
import './Score.css'

function Score() {
    const score = useAppSelector(state => state.score.value)

    return <div className="score">Score: {score}</div>
}

export default Score
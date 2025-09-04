import BaseScoreboard from '../../../components/molecules/Scoreboard'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { showGame } from '../../app/store/appSlice'

interface ScoreboardProps {
    className?: string
}

function Scoreboard({ className }: ScoreboardProps) {
    const dispatch = useAppDispatch()
    const showScoreboard = useAppSelector((state) => state.app.showScoreboard)

    return showScoreboard ? <BaseScoreboard className={className} onClose={() => dispatch(showGame())}>
        Ronde 1 : 1240
    </BaseScoreboard> : null
}

export default Scoreboard
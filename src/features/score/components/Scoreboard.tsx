import BaseScoreboard from '../../../components/molecules/Scoreboard'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { showGame } from '../../app/store/appSlice'
import Rank from './Rank'
import styles from './Scoreboard.module.css'

interface ScoreboardProps {
    className?: string
}

function Scoreboard({ className }: ScoreboardProps) {
    const dispatch = useAppDispatch()
    const showScoreboard = useAppSelector((state) => state.app.showScoreboard)

    return (
        <BaseScoreboard
            className={className}
            open={showScoreboard}
            onOpenChange={() => dispatch(showGame())}
        >
            <div className={styles.floatOuter}>
                <div className={styles.floatInner}>
                    <Rank className={styles.rank1} score={1240} position={1} player="Wouter" />
                </div>
            </div>
            <Rank className={styles.rank2} score={950} position={2} player="Wouter" />
            <Rank className={styles.rank3} score={650} position={3} player="Wouter" />
        </BaseScoreboard>
    )
}

export default Scoreboard
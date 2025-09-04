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
    const highscores = useAppSelector((state) => {
        const list = state.score.highscores ?? [];
        return [...list]
            .sort((a, b) => b.score - a.score)
            .slice(0, 3);
    });

    return (
        <BaseScoreboard
            className={className}
            open={showScoreboard}
            onOpenChange={() => dispatch(showGame())}
        >
            {highscores.length <= 0 && <div className={styles.empty}>No highscores yet</div>}
            {highscores[0] && <div className={styles.floatOuter}>
                <div className={styles.floatInner}>
                    <Rank className={styles.rank1} score={highscores[0].score} position={1} player={highscores[0].player} />
                </div>
            </div>}
            {highscores[1] && <Rank className={styles.rank2} score={highscores[1].score} position={2} player={highscores[1].player} />}
            {highscores[2] && <Rank className={styles.rank3} score={highscores[2].score} position={3} player={highscores[2].player} />}
        </BaseScoreboard>
    )
}

export default Scoreboard
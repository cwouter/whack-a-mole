import styles from './Scoreboard.module.css'
import scoreboard from '../../assets/scoreboard.svg'

interface ScoreboardProps {
    className?: string
    children?: React.ReactNode
    onClose?: () => void
}

function Scoreboard({ className, children, onClose }: ScoreboardProps) {
    return <div className={styles.scoreboard + (className ? ' ' + className : '')}>
        <img className={styles.scoreboardImage} src={scoreboard} alt="scoreboard" />
        <div className={styles.scoreboardClose} onClick={onClose}>
            x
        </div>
        <div className={styles.scoreboardContent}>
            {children}
        </div>
    </div>

}

export default Scoreboard
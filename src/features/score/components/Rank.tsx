import styles from './Rank.module.css'
import rank from '../../../assets/rank.svg'

interface RankProps {
    className?: string
    score: number
    position: number
    player: string
}

export function ordinal(n: number): string {
    const v = n % 100
    if (v >= 11 && v <= 13) return `th`
    switch (n % 10) {
        case 1: return `st`
        case 2: return `nd`
        case 3: return `rd`
        default: return `th`
    }
}

function Rank({ score, position, player, className }: RankProps) {
    return <div className={styles.rank + (className ? ' ' + className : '')}>
        <div className={styles.rankPosition}>{position}<span className={styles.rankOrdinal}>{ordinal(position)}</span></div>
        <div className={styles.rankPlayer}>{player}</div>
        <div className={styles.rankScore}>{score > 1 ? `${score} points` : `${score} point`}</div>
        <img className={styles.rankBase} src={rank} alt="" />
    </div>
}

export default Rank

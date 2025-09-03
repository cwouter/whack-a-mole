import Background from "../atoms/Background"
import Viewport from "../molecules/Viewport"
import styles from './Level1.module.css'
import GridRenderer from "../molecules/GridRenderer"
import WhackAMole from "../features/game/WhackAMole"
import { useAppSelector } from "../hooks"
import { selectMoleList } from "../features/game/gameSelector"

function Level1() {
    const moleGrid = useAppSelector(selectMoleList)

    return (
        <div className={styles.level1}>
            <Background />
            <Viewport width={1000} height={1000} className={styles.grid}>
                <GridRenderer
                    items={moleGrid}
                    columns={4}
                    getKey={(item) => item.id}
                    renderItem={WhackAMole}
                />
            </Viewport>
        </div>
    )
}

export default Level1
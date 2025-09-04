import Background from "../components/atoms/Background"
import Viewport from "../components/molecules/Viewport"
import styles from './Level1.module.css'
import GridRenderer from "../components/molecules/GridRenderer"
import WhackAMole from "../features/game/components/WhackAMole"
import { useAppSelector } from "../hooks"
import { selectMoleList } from "../features/game/store/gameSelector"
import AudioPlayer from "../features/audio/components/AudioPlayer"

function Level1() {
    const moleGrid = useAppSelector(selectMoleList)

    return (
        <div className={styles.level1}>
            <Background />
            <AudioPlayer src="/src/assets/background_audio.mp3" />
            <Viewport width={1000} height={1000} className={styles.grid}>
                <GridRenderer
                    items={moleGrid}
                    columns={4}
                    getKey={(item) => item.id}
                    renderItem={(props) => <WhackAMole {...props} />}
                />
            </Viewport>
        </div>
    )
}

export default Level1
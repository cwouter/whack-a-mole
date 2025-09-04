import bg from '../../assets/WAM_bg.jpg'
import styles from './Background.module.css'

function Background() {
    return <div className={styles.background}>
        <img src={bg} alt="background" />
    </div>

}

export default Background
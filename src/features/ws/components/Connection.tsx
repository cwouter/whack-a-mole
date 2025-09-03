import { useAppSelector } from "../../../hooks"
import styles from './Connection.module.css'

interface ConnectionProps {
    className?: string
}

function Connection({ className }: ConnectionProps) {
    const isConnected = useAppSelector(state => state.ws.connected)

    return <div className={styles.connection + (className ? ' ' + className : '')}>Status: {isConnected ? 'Connected' : 'Disconnected'}</div>
}

export default Connection
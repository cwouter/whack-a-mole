import styles from "./PlayerName.module.css"
import { useAppDispatch } from "../../../hooks"
import { setPlayerName } from "../store/appSlice"
import { useAppSelector } from "../../../hooks"
import { useState } from "react"

interface PlayerNameProps {
    className?: string
}

function PlayerName({ className }: PlayerNameProps) {
    const dispatch = useAppDispatch()
    const playerName = useAppSelector((state) => state.app.playerName)

    const [name, setName] = useState(playerName)
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    return <div className={className}>
        <label className={styles.PlayerLabel} htmlFor="playerName">Player Name</label>
        <input type="text" name="playerName" placeholder="eg: Guacamole" className={styles.PlayerInput} value={name} onChange={onChange} />
        <button type="button" className={styles.PlayerButton} onClick={() => dispatch(setPlayerName(name))}>Save</button>
    </div>
}

export default PlayerName
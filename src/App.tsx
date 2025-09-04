import Level1 from './pages/Level1'
import { useAppDispatch } from './hooks'
import { useEffect } from 'react'
import Connection from './features/ws/components/Connection'
import styles from './App.module.css'
import { connect } from './features/ws/store/wsSlice'
import Score from './features/score/components/Score'
import GameStart from './features/game/components/GameStart'
import Cursor from './features/cursor/Cursor'
import Scoreboard from './features/score/components/Scoreboard'
import ScoreboardButton from './features/score/components/ScoreboardButton'
import PlayerName from './features/app/components/PlayerName'
import { useAppSelector } from './hooks'

function App() {

  const dispatch = useAppDispatch()
  const playerName = useAppSelector((state) => state.app.playerName)

  useEffect(() => {
    dispatch(connect())
  }, [dispatch])

  return (
    <>
      <Cursor />
      <h1 className={styles.title}>Hi, {playerName}! Welcome to Whack-a-Mole</h1>
      <Score className={styles.score} />
      <ScoreboardButton className={styles.scoreboardButton} />
      <PlayerName className={styles.playerName} />
      <Scoreboard className={styles.scoreboard} />
      <Connection className={styles.connection} />
      <GameStart className={styles.start} />
      <Level1 />
    </>
  )
}

export default App

import Level1 from './pages/Level1'
import { useAppDispatch } from './hooks'
import { useEffect } from 'react'
import Connection from './features/ws/components/Connection'
import styles from './App.module.css'
import { connect } from './features/ws/store/wsSlice'
import Score from './features/score/components/Score'
import GameStart from './features/game/components/GameStart'
import Cursor from './features/cursor/Cursor'

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(connect())
  }, [dispatch])

  return (
    <>
      <Cursor />
      <Score className={styles.score} />
      <Connection className={styles.connection} />
      <GameStart className={styles.start} />
      <Level1 />
    </>
  )
}

export default App

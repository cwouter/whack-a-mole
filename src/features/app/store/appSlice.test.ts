import { describe, it, expect } from 'vitest'
import reducer, { showGame, showScoreboard, setPlayerName } from './appSlice'

describe('appSlice reducer', () => {
  it('should start with the scoreboard hidden and a default player name', () => {
    const state = reducer(undefined, { type: 'unknown' } as any)
    expect(state).toEqual({ showScoreboard: false, playerName: 'Guacamole' })
  })

  it('should show the game screen when you navigate to the game', () => {
    const prev = { showScoreboard: true, playerName: 'Alice' }
    const next = reducer(prev, showGame())
    expect(next.showScoreboard).toBe(false)
    expect(next.playerName).toBe('Alice')
  })

  it('should show the leaderboard when you open the scoreboard', () => {
    const prev = { showScoreboard: false, playerName: 'Bob' }
    const next = reducer(prev, showScoreboard())
    expect(next.showScoreboard).toBe(true)
    expect(next.playerName).toBe('Bob')
  })

  it('should update your player name when you change it', () => {
    const prev = { showScoreboard: false, playerName: 'Guacamole' }
    const next = reducer(prev, setPlayerName('New Player'))
    expect(next.playerName).toBe('New Player')
    expect(next.showScoreboard).toBe(false)
  })
})

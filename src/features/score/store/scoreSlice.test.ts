import { describe, it, expect } from 'vitest'
import reducer from './scoreSlice'
import { whacked } from '../../game/store/gameActions'
import { started } from '../../game/store/gameSlice'

describe('scoreSlice reducer', () => {
    it('should start with a score of 0 and an empty leaderboard', () => {
        const state = reducer(undefined, { type: 'unknown' } as any)
        expect(state).toEqual({ value: 0, highscores: [] })
    })

    it('should show the leaderboard with the latest highscores', () => {
        const prev = reducer(undefined, { type: 'unknown' } as any)
        const highscores = [
            { player: 'Alice', score: 10 },
            { player: 'Bob', score: 7 },
        ]

        const next = reducer(prev, { type: 'score/update', payload: { highscores } })

        expect(next.highscores).toEqual(highscores)
        expect(next.value).toBe(0)
    })

    it('should show your total score after you whack a mole', () => {
        const prev = { value: 5, highscores: [] }
        const action = whacked({ id: 1, totalScore: 42 })

        const next = reducer(prev, action)

        expect(next.value).toBe(42)
        expect(next.highscores).toEqual([])
    })

    it('should reset your score to 0 when a new game starts', () => {
        const prev = { value: 99, highscores: [{ player: 'X', score: 99 }] }
        const action = started({ moles: {} } as any)

        const next = reducer(prev as any, action)

        expect(next.value).toBe(0)
        expect(next.highscores).toEqual([{ player: 'X', score: 99 }])
    })
})

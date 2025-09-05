import { describe, it, expect } from 'vitest'
import reducer, { started, nomination, ended, whack } from './gameSlice'

describe('gameSlice reducer', () => {
    it('should start a game as not started with no moles', () => {
        const state = reducer(undefined, { type: 'unknown' } as any)
        expect(state).toEqual({ started: false, moles: {} })
    })

    it('should start the game and display the initial moles', () => {
        const prev = reducer(undefined, { type: 'unknown' } as any)
        const moles = {
            0: { id: 0, state: 'hole' as const },
            1: { id: 1, state: 'mole' as const, expireAt: 123 },
        }
        const next = reducer(prev, started({ moles } as any))

        expect(next.started).toBe(true)
        expect(next.moles).toEqual(moles)
    })

    it('should show a mole when it pops up', () => {
        const base = {
            started: true,
            moles: {
                0: { id: 0, state: 'hole' as const },
                1: { id: 1, state: 'hole' as const },
            },
        }
        const action = nomination({ mole: { id: 1, state: 'mole' }, expireAt: 456 } as any)
        const next = reducer(base as any, action)

        expect(next.moles[1]).toEqual({ id: 1, state: 'mole', expireAt: 456 })
        expect(next.moles[0]).toEqual({ id: 0, state: 'hole' })
    })

    it('should mark the game as ended', () => {
        const base = {
            started: true,
            moles: { 0: { id: 0, state: 'hole' as const } },
        }
        const next = reducer(base as any, ended())
        expect(next.started).toBe(false)
        expect(next.moles).toEqual(base.moles)
    })

    it('should remove a visible mole when you whack it and update your board', () => {
        const base = {
            started: true,
            moles: {
                2: { id: 2, state: 'mole' as const, expireAt: 999 },
            },
        }
        const next = reducer(base as any, whack({ id: 2, currentState: 'mole' }))

        expect(next.moles[2].state).toBe('hole')
        expect(next.moles[2].expireAt).toBeUndefined()
    })

    it('should do nothing if you try to whack an empty hole', () => {
        const base = {
            started: true,
            moles: {
                3: { id: 3, state: 'hole' as const },
            },
        }
        const next = reducer(base as any, whack({ id: 3, currentState: 'hole' }))

        expect(next.moles[3]).toEqual({ id: 3, state: 'hole' })
    })
})

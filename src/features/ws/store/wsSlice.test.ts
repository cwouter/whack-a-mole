import { describe, it, expect } from 'vitest'
import reducer, { connect, connected, disconnected, error as wsError } from './wsSlice'

describe('wsSlice reducer', () => {
  it('should start disconnected before the user connects', () => {
    const state = reducer(undefined, { type: 'unknown' } as any)
    expect(state.connected).toBe(false)
    expect(state.messages).toEqual([])
    expect(state.error).toBeUndefined()
  })

  it('should remain disconnected while the app is trying to connect', () => {
    // When the app starts connecting, users still see it as not connected yet
    const prev = reducer(undefined, { type: 'unknown' } as any)
    const next = reducer(prev, connect())
    expect(next.connected).toBe(false)
  })

  it('should show as connected when the socket is established', () => {
    const prev = { connected: false, messages: [], error: 'Previous error' as string | undefined }
    const next = reducer(prev, connected())
    expect(next.connected).toBe(true)
    // Any previous error should be cleared for the user once connected
    expect(next.error).toBeUndefined()
  })

  it('should show as disconnected when the socket closes', () => {
    const prev = { connected: true, messages: [], error: undefined as string | undefined }
    const next = reducer(prev, disconnected())
    expect(next.connected).toBe(false)
  })

  it('should display an error message when a connection error occurs', () => {
    const prev = reducer(undefined, { type: 'unknown' } as any)
    const next = reducer(prev, wsError('Failed to connect'))
    expect(next.error).toBe('Failed to connect')
  })

  it('should clear any shown error once the app reconnects successfully', () => {
    const prev = { connected: false, messages: [], error: 'Network down' as string | undefined }
    const next = reducer(prev, connected())
    expect(next.connected).toBe(true)
    expect(next.error).toBeUndefined()
  })
})

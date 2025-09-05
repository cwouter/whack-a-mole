import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Rank, { ordinal } from './Rank'

function renderRank(position: number, score: number, player = 'Player', className?: string) {
  const { container } = render(<Rank position={position} score={score} player={player} className={className} />)
  return container
}

describe('Rank component', () => {
  it('should render player name', () => {
    renderRank(1, 10, 'Wouter')
    expect(screen.getByText('Wouter')).toBeInTheDocument()
  })

  it('should merge a custom className on the wrapper', () => {
    const container = renderRank(1, 10, 'Player', 'extra-class')
    const root = container.firstElementChild as HTMLElement
    expect(root).toBeTruthy()
    expect(root.classList.contains('extra-class')).toBe(true)
  })

  it('should pluralize score correctly (point vs points)', () => {
    const { rerender } = render(<Rank position={1} score={1} player="P" />)
    expect(screen.getByText('1 point')).toBeInTheDocument()

    rerender(<Rank position={1} score={2} player="P" />)
    expect(screen.getByText('2 points')).toBeInTheDocument()

    // By current implementation, 0 is treated as singular
    rerender(<Rank position={1} score={0} player="P" />)
    expect(screen.getByText('0 point')).toBeInTheDocument()
  })

  it.each([
    { n: 1, suffix: 'st' },
    { n: 2, suffix: 'nd' },
    { n: 3, suffix: 'rd' },
    { n: 4, suffix: 'th' },
    { n: 11, suffix: 'th' },
    { n: 12, suffix: 'th' },
    { n: 13, suffix: 'th' },
    { n: 21, suffix: 'st' },
    { n: 22, suffix: 'nd' },
    { n: 23, suffix: 'rd' },
    { n: 24, suffix: 'th' },
  ])('should return correct suffix for %o', ({ n, suffix }) => {
    expect(ordinal(n)).toBe(suffix)
  })
})

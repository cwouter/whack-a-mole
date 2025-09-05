import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import GridRenderer from './GridRenderer'

/** Simple item type for testing */
interface Item {
    id: number
    label: string
}

describe('GridRenderer', () => {
    it('should show all items in a grid so I can see them laid out', () => {
        const items: Item[] = [
            { id: 1, label: 'A' },
            { id: 2, label: 'B' },
            { id: 3, label: 'C' },
            { id: 4, label: 'D' },
            { id: 5, label: 'E' },
        ]

        render(
            <GridRenderer
                items={items}
                columns={3}
                getKey={(i) => i.id}
                renderItem={(i: any) => (
                    <div data-testid="cell">
                        {i.label} ({i.r},{i.c})
                    </div>
                )}
            />
        )

        // 5 items rendered
        const cells = screen.getAllByTestId('cell')
        expect(cells).toHaveLength(5)

        // Row/column positions computed by index and columns
        expect(screen.getByText('A (0,0)')).toBeInTheDocument()
        expect(screen.getByText('B (0,1)')).toBeInTheDocument()
        expect(screen.getByText('C (0,2)')).toBeInTheDocument()
        expect(screen.getByText('D (1,0)')).toBeInTheDocument()
        expect(screen.getByText('E (1,1)')).toBeInTheDocument()
    })

    it('should use the number of columns to size the grid so it looks correct', () => {
        const items: Item[] = [
            { id: 1, label: 'A' },
            { id: 2, label: 'B' },
            { id: 3, label: 'C' },
        ]

        const { container } = render(
            <GridRenderer
                items={items}
                columns={4}
                getKey={(i) => i.id}
                renderItem={(i: any) => <div data-testid="cell">{i.label}</div>}
            />
        )

        const root = container.firstElementChild as HTMLElement
        expect(root).toBeTruthy()
        // gridTemplateColumns is set inline via style
        expect(root.style.gridTemplateColumns).toBe('repeat(4, 1fr)')
    })

    it('should apply my custom className so I can style the grid', () => {
        const items: Item[] = [{ id: 1, label: 'A' }]

        const { container } = render(
            <GridRenderer
                className="extra-class"
                items={items}
                columns={1}
                getKey={(i) => i.id}
                renderItem={(i: any) => <div data-testid="cell">{i.label}</div>}
            />
        )

        const root = container.firstElementChild as HTMLElement
        expect(root.className).toContain('extra-class')
    })

})

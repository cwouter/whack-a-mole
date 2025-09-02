import Background from "../atoms/Background"
import Mole from "../molecules/Mole"
import Viewport from "../molecules/Viewport"
import './Level1.css'

interface MoleGrid {
    r: number,
    c: number,
    state: 'mole' | 'hole',
}

const moleGrid: MoleGrid[][] = [
    [{ r: 0, c: 0, state: 'hole' }, { r: 0, c: 1, state: 'hole' }, { r: 0, c: 2, state: 'hole' }, { r: 0, c: 3, state: 'hole' }],
    [{ r: 1, c: 0, state: 'hole' }, { r: 1, c: 1, state: 'mole' }, { r: 1, c: 2, state: 'hole' }, { r: 1, c: 3, state: 'hole' }],
    [{ r: 2, c: 0, state: 'hole' }, { r: 2, c: 1, state: 'hole' }, { r: 2, c: 2, state: 'hole' }, { r: 2, c: 3, state: 'hole' }],
]

function Level1() {
    return (
        <div className="level1">
            <Background />
            <Viewport width={1000} height={1000}>
                <div
                    className="mole-grid"
                    style={{
                        gridTemplateColumns: `repeat(${moleGrid[0].length}, 1fr)`,
                        gridTemplateRows: `repeat(${moleGrid.length}, 1fr)`,
                    }}
                >
                    {moleGrid.map((row) =>
                        row.map((cell) => (
                            <Mole key={`${cell.r}-${cell.c}`} state={cell.state} />
                        ))
                    )}
                </div>
            </Viewport>
        </div>
    )
}

export default Level1
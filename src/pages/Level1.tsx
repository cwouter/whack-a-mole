import Background from "../atoms/Background"
import Viewport from "../molecules/Viewport"
import './Level1.css'
import GridRenderer from "../molecules/GridRenderer"
import Score from "../features/score/Score"
import WhackAMole from "../features/game/WhackAMole"
import { useAppSelector } from "../hooks"

interface MoleStateItem {
    r: number,
    c: number,
    state: 'mole' | 'hole',
}

const moleGrid: MoleStateItem[][] = [
    [{ r: 0, c: 0, state: 'hole' }, { r: 0, c: 1, state: 'hole' }, { r: 0, c: 2, state: 'hole' }, { r: 0, c: 3, state: 'hole' }],
    [{ r: 1, c: 0, state: 'hole' }, { r: 1, c: 1, state: 'mole' }, { r: 1, c: 2, state: 'hole' }, { r: 1, c: 3, state: 'hole' }],
    [{ r: 2, c: 0, state: 'hole' }, { r: 2, c: 1, state: 'hole' }, { r: 2, c: 2, state: 'hole' }, { r: 2, c: 3, state: 'hole' }],
]

const columns = moleGrid[0].length

function Level1() {
    const moles = useAppSelector(state => state.game.moles)

    // todo: convert redux state to internal model
    // const moleGrid = Object.keys(moles).map((id) => ({
    //     r: Math.floor(id / columns),
    //     c: id % columns,
    //     state: moles[id].state,
    // }))

    return (
        <div className="level1">
            <Background />
            <Score />
            <Viewport width={1000} height={1000}>
                <GridRenderer
                    items={moleGrid}
                    columns={columns}
                    getKey={(item) => `${item.r}-${item.c}`}
                    renderItem={WhackAMole}
                />
            </Viewport>
        </div>
    )
}

export default Level1
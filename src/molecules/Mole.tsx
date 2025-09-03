import React from "react"
import mole from '../assets/WAM_mole.png'
import hole from '../assets/WAM_hole.png'

export type MoleState = 'mole' | 'hole'

interface MoleProps {
    id: number,
    state: MoleState,
    onClick?: (id: number, state: MoleState) => void
}

function Mole({ id, state, onClick }: MoleProps) {
    const moleImage = state === 'mole' ? mole : hole
    return <>
        <img src={moleImage} alt={state} onClick={() => onClick?.(id, state)} />
    </>
}

export default React.memo(Mole)
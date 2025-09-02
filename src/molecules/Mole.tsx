import MoleAtom from "../atoms/Mole"
import HoleAtom from "../atoms/Hole"

type MoleState = 'mole' | 'hole'

interface MoleProps {
    state: MoleState,
}

function Mole({ state }: MoleProps) {
    return (
        <>
            {state === 'mole' ? <MoleAtom /> : <HoleAtom />}
        </>
    )
}

export default Mole
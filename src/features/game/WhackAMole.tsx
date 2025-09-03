import { useAppDispatch } from "../../hooks"
import Mole, { type MoleState } from "../../molecules/Mole"
import { whack } from "./gameActions"

interface Mole {
    id: number,
    state: MoleState,
}

function WhackAMole({ id, state }: Mole) {
    const dispatch = useAppDispatch()
    return <Mole id={id} state={state} onClick={(id: number, state: MoleState) => {
        if (state === 'mole') {
            dispatch(whack({ id, currentState: state }))
        }
    }} />
}

export default WhackAMole
import { useAppDispatch } from "../../../hooks"
import Mole, { type MoleState } from "../../../components/atoms/Mole"
import { applyWhack } from "../store/gameActions"

interface Mole {
    id: number,
    state: MoleState,
}

function WhackAMole({ id, state }: Mole) {
    const dispatch = useAppDispatch()
    return <Mole id={id} state={state} onClick={(id: number, state: MoleState) => {
        if (state === 'mole') {
            dispatch(applyWhack(id, state))
        }
    }} />
}

export default WhackAMole
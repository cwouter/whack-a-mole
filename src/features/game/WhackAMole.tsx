import { useAppDispatch } from "../../hooks"
import { increment } from "../score/scoreSlice"
import Mole, { type MoleState } from "../../molecules/Mole"

interface MoleStateItem {
    r: number,
    c: number,
    state: MoleState,
}

function WhackAMole(args: MoleStateItem) {
    const dispatch = useAppDispatch()
    return <Mole state={args.state} onClick={(state: MoleState) => state === 'mole' && dispatch(increment())} />
}

export default WhackAMole
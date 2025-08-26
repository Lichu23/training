//@ts-nocheck
import { useDispatch, useSelector } from "react-redux"
import { decremented, incremented } from "./Exercise1"

export default function Counter() {

    const dispatch = useDispatch()
    const counter = useSelector((state) => state.value)

  return (
    <div className="flex flex-col gap-3">
        <h1>Counter:{counter}</h1>
        <button onClick={() => dispatch(incremented())}>+</button>
        <button onClick={() => dispatch(decremented())}>-</button>
    </div>
  )
}

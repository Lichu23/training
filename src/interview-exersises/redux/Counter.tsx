//@ts-nocheck
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './CounterSlice'

export default function Counter() {

  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

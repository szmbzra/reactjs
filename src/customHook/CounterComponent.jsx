import React from 'react'
import useCounter from './useCounter'
export default function CounterComponent() {
    const {count, increment, decrement} = useCounter(2,2);
  return (
    <div>
      <p>count {count} </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

import React,{useState} from 'react'
import "./App.css"
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);
  return (
   <div className="Ap">
    <h1>Use Reducer Hook</h1>
    <h2>Count {count}</h2>
    <button onClick={()=>setCount(count +1)}>Increment Count</button>
    <button onClick={()=>setCount(count -1)}>Increment Count</button>
  {/* eg 2 */}
  <br />
  <br />
  <Counter />
   </div>
  )
}

export default App
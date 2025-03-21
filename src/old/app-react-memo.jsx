import React, { use, useState } from 'react'
import "./App.css";
import ChildComponent from './ChildComponent';
export default function App() {
  const [count, setCount] = useState(0);
  console.log("parent compoents");
  return (
  <div className="App">
    <h1>Memo in react</h1>
    <ChildComponent count = {count}/>
    <h2>Count{count}</h2>
    <button onClick={()=>setCount(count+1)}>Count +</button>
  </div>
  )
}

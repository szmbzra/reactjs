import React, { useState,useEffect,useDeferredValue } from 'react'
import "../App.css"
import List from './List';
export default function App() {
    const [input,setInput] = useState();
    const handleChange = (e) =>{
        setInput(e.target.value);
    }
    // eg2 
    const [count, setCount] = useState(0);
    const deferredValue = useDeferredValue(count);
    useEffect(()=>{
        console.log(`count ${count} \nDeferred: ${deferredValue}`);
    });
  return (
    <div className="App">
    {/* eg 1 */}
    {/* <h2>Count  {count}</h2>
    <button onClick={handleClick}>Update COunt</button> */}
        <h1>Use Transition Hook</h1>
        {/* ege 2 */}
        <input type="text" value={input} onChange={handleChange}/>
        <List input= {input} />
        <h2>Count {count}</h2>
        <button onClick={()=>setCount(count+1)}>Update count</button>
    </div>
  )
}

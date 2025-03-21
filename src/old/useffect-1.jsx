import React,{useEffect, useState} from 'react'
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  // examle one
  useEffect(()=>{
    // alert("use effect hooks");
    console.log("hello world");
    console.log("updating");
  },[count]); // if we have multi state and want to use one only for count if defined
  return (
<>
<div className="App">
  <h1>UseEffect Hooks</h1>
  <h2>COunt: {count}</h2>
  <button onClick={()=>setCount(count +1)}>Update Count</button>
</div>
</>
  )
}

export default App

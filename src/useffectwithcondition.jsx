import React , {useEffect, useState} from 'react'
import "./App.css";
import UserTotal from './UsertTotal';

const App = () => {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(100);
useEffect(()=>{
  // console.log("after render");
},[total]);

useEffect(()=>{
  // console.log("after render count");
},[count]);

  return (
<>
<div className="App">
{/* <h2>Count  {count}</h2> */}
  <h1>useEffect with condition hooks</h1>
  <UserTotal count = {count} total ={total}/>
  <button onClick={()=>setCount(count+1)}>Update Count</button>

  {/* eg 2 */}
  {/* <h2>Count  {total}</h2> */}
  <button onClick={()=>setTotal(total+1)}>Update total</button>
</div>
</>
  )
}

export default App

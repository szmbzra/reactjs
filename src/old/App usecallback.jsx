import React,{useState, useCallback} from 'react'
import "./App.css"
import ChildsComponent from './ChildsComponent';

function App() {
  // normal eg 1
  const [count1, setCount1] = useState(0);
  console.log("prnt render");
  // eg2
  const [count2, setCount2] = useState(0);
  const IncrementCount = useCallback(()=>{
    setCount2((prevCount)=>prevCount+1);
    console.log("call back");
  },[]);
  return (
   <div className="App">
    <h2>React usecallback</h2>
  {/* eg1 */}
  <p>Count 1: {count1}</p>
  <button onClick={()=>setCount1(count1 +1)}>Increment Count</button>
  <p>cout 2 {count2}</p>
  <ChildsComponent Increment = {IncrementCount}/>
   </div>
  )
}

export default App
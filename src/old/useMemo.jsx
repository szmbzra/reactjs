import React,{useState, useMemo} from 'react'
import "./App.css";
function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [count, setCount] = useState(0);
  // const sum = () =>{
  //   console.log("calculating sum..");
  //   return number1 + number2;
  // }
  // eg2
const sum = useMemo(()=>{
  console.log("calculating");
  return  number1 + number2;
},[number1, number2]);
  return (
    <div className="App">
      <h1>usememo in react</h1>
      <div>
        <input type="number"  value={number1} onChange={(e)=>setNumber1(Number(e.target.value))} />
        <input type="number"  value={number2} onChange={(e)=>setNumber2(Number(e.target.value))} />
        {/* <p>sum {sum()}</p> */}
        <p>sum {sum}</p>

        <h2>Count number {count}</h2>
        <button onClick={()=>setCount(count+1)}>Click ++</button>
      </div>
    </div>
  )
}

export default App
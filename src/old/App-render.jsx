import React,{useState} from 'react'
import './App.css';
import RenderMethod from './RenderMethod';
const App = () => {
  // const [name, setName] = useState("sam bajracharay");
  return (
   <div className="App">
    {/* <RenderMethod name={name}/> */}
    {/* <button onClick={()=>setName("Bajracharay")}>Update Name</button> */}
    <RenderMethod />
   </div>
  )
}

export default App
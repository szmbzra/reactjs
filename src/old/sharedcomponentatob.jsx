import React,{useState} from 'react'
import "./App.css";
import ChildComponentA from './ChildComponentA';
import ChildComponentB from './ChildComponentB';
export default function App() {
  const [sharedState, setSharedState] = useState("");
  const handleChange = (newValue)=>{
    console.log(newValue);
    setSharedState(newValue);
  }
  return (
 <div className="App">
      <ChildComponentA  sharedState={sharedState} handleChange={handleChange}/>
 <ChildComponentB  sharedState={sharedState}/>
 </div>

  )
}

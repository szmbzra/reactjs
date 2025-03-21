import React,{useState} from 'react'
import "./App.css"
export default function App() {
  const [inputValue, setInputValue] =useState("");
  const handleChange = (event) => setInputValue(event.target.value);
  console.log(inputValue);
  return (
  <div className="App">
<h1>Control components</h1>
<input type="text" name="" value={inputValue} onChange={handleChange} id="" />
<p>Current values {inputValue}</p>
  </div>
  )
}

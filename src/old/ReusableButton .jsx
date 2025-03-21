import React from 'react';
import "./App.css";
import ReusableButton from './ReusableButton';
import Reusable from './Reusable';
export default function App() {
const handleButtonClick =() =>{
  console.log("click me");
}

const countries = ["as","asd","dsad","dsf","sdfsdfsd"];
  return (
<>
<div className="App">
  <h1>reusable components in react</h1>
  <ReusableButton text = "click me" onClick ={handleButtonClick} />
  <ReusableButton text = "hello sam" onClick ={handleButtonClick} />
<Reusable items={countries}/>
</div>
</>
  )
}

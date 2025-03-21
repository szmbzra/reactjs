import React,{useRef} from 'react'
import "./App.css"

export default function App() {
  // eg 1
  const inputRef = useRef(null);
  // eg2
  const handleButtonClick = () =>{
    const inputValue=inputRef.current.value;
    alert(`input value: ${inputValue}`);
    console.log(`input value: ${inputValue}`);
  }
  return (
   <>
    <div>Use Ref in rect</div>
    <input type="text" ref={inputRef} />
    <button onClick={handleButtonClick}>Get Input Value</button>
   </>
  )
}

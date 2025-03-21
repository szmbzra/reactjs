import React,{useRef} from 'react'
import "./App.css"
import ChildrenComponent from './ChildrenComponent'
export default function App() {
  // eg1
  // const inputRef = useRef(null);
  // const updateInput = () =>{
  //   inputRef.current.value = "1000";
  //   inputRef.current.style.color = "red";
  //   inputRef.current.style.background = "blue";
  //   inputRef.current.focus();
  // }
  // eg2
  const childRef = useRef();
  const handleButtonClick = () =>{
    if(childRef.current){
      childRef.current.handleChildBUttonClick();
    }
  }
  return (
<div className="App">
  <h1>Forward ref</h1>
{/* <ChildrenComponent ref={inputRef}/>
<button onClick={updateInput}>Update Button</button> */}
<ChildrenComponent ref={childRef}/>
{/* eg 2 */}
<button onClick={handleButtonClick}>Click child button from parent</button>
</div>
    
  )
}

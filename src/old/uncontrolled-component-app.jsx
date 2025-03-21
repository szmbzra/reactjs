import React,{useRef} from 'react'
import "./App.css"

function App() {
  // eg1
  let inputRef = useRef(null);
  let inputRef2 = useRef(null);
  const submitForm = (e) =>{
    e.preventDefault();
    console.log("first input value",inputRef.current.value );
    console.log("second input value",inputRef.current.value );

    let input3 = document.getElementById("input3").value;
    console.log("second input value",input3 );

  }
  return (
   <div className="App">
    <h2>Uncontrolled Components</h2>
    <form action="" onSubmit={submitForm}>
      <input type="text" name="" ref={inputRef} id="" />
      <input type="text" name="" ref={inputRef2} id="" />
      <input type="text" id="input3" />  {/* uncontrolled js*/}
      <button>Submit</button>
    </form>
   </div>
  )
}

export default App
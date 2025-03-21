import React, { Component,createRef } from 'react'
import "./App.css"

class App extends Component {
  constructor(){
    super();
    this.myInputRef = createRef();
  }
  // componentDidMount(){
  //   this.myInputRef.current.value = "sam bajrac";
  //   console.log(this.myInputRef.current.value);
  // }
  handleClick = () =>{
    this.myInputRef.current.focus();
    this.myInputRef.current.style.background = "green";
    this.myInputRef.current.style.color = "white";
    console.log(this.myInputRef.current.value);
  }
  render() {
    // console.log(this.myInputRef);

    return (
     <div className="App">
      <h1>Ref in react</h1>
      <input type="text" ref={this.myInputRef} />
      <button onClick={this.handleClick}>FOcus input</button>
     </div>
    )
  }
}
export default App;
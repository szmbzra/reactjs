import React, { Component } from 'react'
import "./App.css";

 class App extends Component {
constructor(){
  super();
  this.state = {
    name: "sam bajracara",
    count: 0
  }
  // console.log("constructor called");
}
componentDidUpdate(prevProps, prevState){
  if(this.state.count, prevState.count){
alert("working");
console.log("constucto did update",prevState.count, this.state.count);

  }
}
  render() {
    console.log("render called");
    return (
<>
<div>App</div>
<p>Count {this.state.count}</p>
{/* <button onClick={()=>this.setState({name: "sam is done"})}>Update State</button> */}
<button onClick={()=>this.setState({count:this.state.count + 1})}>Update State</button>
</>
    )
  }
}
export default App;
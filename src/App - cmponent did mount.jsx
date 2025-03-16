
import React,{Component} from 'react'
import './App.css';

class App extends Component {
constructor(){
  super();
  this.state = {
count:0,

  };
  console.log("constructor called");
}
incrementCount = () =>{
this.setState((prevState)=>({
  count:prevState.count + 1,
}))
}

componentDidMount(){
  console.log("constructor22 called");
}
render(){
  console.log("render");
  return (
    <>
    <div className="App">
    <h1>Lifecycle component did mount</h1>
    <h2>Count:{this.state.count}</h2>
    <button onClick={this.incrementCount}>Increment</button>
    </div>
    </>
      )
}
}

export default App
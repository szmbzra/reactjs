import React, { Component } from 'react';
import "./App.css";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      count:0
    }
  }
  shouldComponentUpdate(nexProps, nextState){
    console.log("should component update",this.state.count, nextState);

    if(nextState.count < 5){
return true;
    }
    return false;
  }
  render() {
    return (
  <>
<div className="App">
  <h1>Life cycle componentDidUpdate</h1>
  <h2>Count: {this.state.count}</h2>
  <button onClick={()=>this.setState({count:this.state.count +1})}>Update State</button>
</div>
  </>
    )
  }
}

import React, { Component } from 'react'
import "./App.css";
import CounterPureComponent from './CounterPureComponent';

export default class App extends Component {
  // eg 1
  constructor(props){
super(props);
this.state = {
  count:0,
}
  }
handleIncrement = ()=>{
  this.setState((prevState)=>({
    count: prevState.count +1,
  }))
}
  render() {
    console.log("parent rendered");
    return (
     <div className="App">
      <h1>Pure Component in react</h1>
      <CounterPureComponent count={this.state.count} onIncrement={this.handleIncrement}/>
     </div>
    )
  }
}

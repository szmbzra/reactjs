import React, { Component } from 'react';
import "./App.css";
import Unmount from './Unmount';
export default class App extends Component {
constructor(){
  super();
  this.state = {
    show: true
  }
}
  render() {
    console.log("clicked", this.state.show);
    return (
  <>
<div className="App">
<p>LifeCycle Methods</p>
{this.state.show ? <Unmount /> : <h2>Removed</h2>}
<button onClick={()=>this.setState({show: !this.state.show})}>Removed componets</button>
</div>
  </>
    )
  }
}

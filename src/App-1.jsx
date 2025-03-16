import React,{Component} from 'react'
import './App.css';
class App extends Component {
constructor(){
  super();
  console.log("constrcutor methiod");
}

  render(){
    console.log("render methiod");
  return (
    <div>Life Cycle Method</div>
  )
}}

export default App
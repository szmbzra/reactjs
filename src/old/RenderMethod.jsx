// rcc
import React, { Component } from 'react'

export default class RenderMethod extends Component {
    constructor(){
        super();
        this.state = {
            email:"i am done",
        }
    }
  render() {
    console.log("render method", this.state.email);
    // eg 1
    // console.log("render method", this.props);

    return (
     <>
     {/* <h2>Render Method {this.props.name}</h2> */}
     <h2>Render Method {this.state.name}</h2>
     <h2>Render Method {this.state.email}</h2>
     <button onClick={()=>this.setState({email:"szmvb@gmail.com"})}>Update State</button>
     </>
    )
  }
}

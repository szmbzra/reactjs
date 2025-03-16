import React, { Component } from 'react'

export default class Unmount extends Component {
    componentDidMount(){
        this.intervalId = setInterval(()=>{
            console.log("interval tikc");
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
        console.log("removed");
    }
  render() {
    return (
      <div>
        <h1>Child component will unmount</h1>
      </div>
    )
  }
}

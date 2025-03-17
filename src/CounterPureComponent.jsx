import React, { PureComponent } from 'react'

export default class CounterPureComponent extends PureComponent {
  render() {
    console.log("counter pure component");
    return (
    <>
    <h1>Counter {this.props.count}</h1>
    <button onClick={this.props.onIncrement}>Increment</button>
    </>
    )
  }
}

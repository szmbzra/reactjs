import React, { Component } from 'react'

export default class UserList extends Component {
  render() {
    console.log(this.props);
    const {name,email} = this.props;
    return (
      <>
      {/* <h1>{this.props.name}</h1>
      <h1>{this.props.email}</h1> */}
      <p>{name}</p>
      <p>{email}</p>
      </>
    )
  }
}
import React from 'react'

export default function Users(props) {
    console.log(props);
   
  return (
   <>
   <h1>Users</h1>
   <button onClick={props.handleClick}>click em</button>
   <p>Count {props.count}</p>
   <button onClick={props.increment}>Increment</button>
   </>
  )
}

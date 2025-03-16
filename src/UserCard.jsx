import React from 'react'

export default function UserCard(props2) {
  const {name,age,email} = props2;
  return (
<>
{/* <h1>hello world {props.name}</h1> */}
<p>{name}</p>
<p>{age}</p>
<p>{email}</p>
</>
  )
}

import React, { useId } from 'react'

export default function Email() {
    // const id = Math.random();
    const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-template`}>Email</label>
      <input type="text" name="" id="email"autoComplete="off" />
      <label htmlFor={`${id}-krishna`}>krishna</label>
      <label htmlFor={`${id}-ram`}>gautam</label>
    </div>
  )
}

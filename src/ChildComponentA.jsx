import React from 'react'

export default function ChildComponentA({sharedState, handleChange}) {
  // eg1
  const handleInputChange = (event) => {
    const newValue= event.target.value;
    handleChange(newValue);
  }
  return (
    <div>
   <input type="text" name="" value={sharedState}  onChange={handleInputChange} id="" />
    </div>
  )
}

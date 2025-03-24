import React from 'react'
import { NavLink } from 'react-router-dom'
// by defeault it will add active class using
function Navbar() {
  return (
<>
<nav>
  <ul>
    <li>
     <NavLink to ="/" style={({isActive})=>{return {backgroundColor:isActive ? "green": "transparent"}}}>Home</NavLink>
    </li>
    <li>
      <NavLink to ="/about" style={({isActive})=>{return {backgroundColor:isActive ? "blue": "transparent"}}}>About</NavLink>
    </li>
    <li>
      <NavLink to="/services" style={({isActive})=>{return {backgroundColor:isActive ? "pink": "transparent", color:"Red"}}}>Services</NavLink>
    </li>
    <li>
      <NavLink to="/user">userList</NavLink>
    </li>
    <li>
      <NavLink to="/geturl">URL Params</NavLink>
    </li>
    <li>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </li>
  </ul>
</nav>
</>
  )
}

export default Navbar

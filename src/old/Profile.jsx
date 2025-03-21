import React from 'react'

export default function Profile() {
    const isLoggedIn = true;
    const items = ["apple", "banana","orange"];
    const isAuthenticated = true;
    
  return (
   <>
 {/* {isLoggedIn ? <h2>Welcome User</h2>: <h2>Welcome Guest</h2>} */}
{
items.length > 0 ? (
    <ul>
        {
          items.map((item, index)=>
            <li key={index}>{item}</li>
          )  
        }
    </ul>
) : (
    <p>No items to display</p>
)
}
<div>{isAuthenticated && (
    <button onClick={()=>{console.log("log out");}}>Logout</button>
)}</div>
   </>
  )
}

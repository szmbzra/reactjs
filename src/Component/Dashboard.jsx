import React from 'react'
import { Link,Outlet, useLocation } from 'react-router-dom'

function Dashboard() {
    // eg 1
    const location = useLocation();
    console.log(location);
    // console.log(location.pathname);
    // console.log(location.state);
    // console.log(location.state.name);
  return (
    <div>
      <h1>welcome to Dashboard</h1>
     <Link to="profile" state={{name:"sambjarac", owner:"bhaskar guota"}}>profile Page</Link>
     <Link to="setting">setting Page</Link>
     <Outlet />
    </div>
  )
}

export default Dashboard

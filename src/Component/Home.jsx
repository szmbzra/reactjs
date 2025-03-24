
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  // eg1
  const navigate  = useNavigate();
  // eg 2
  const handleDynamicNavigation = (targetRoute) =>{
    navigate(targetRoute);
    console.log(targetRoute);
  }
  const handleConditionNavigation = (shouldNavigate)=>{
if(shouldNavigate){
  navigate("/about");
}else{
  navigate("/services");
}
  }
  return (
    <div>
      <h1>Home page</h1>
      {/* eg 1 */}
      {/* <button onClick={()=>navigate("/about")}>Got to about page</button>
      <button onClick={()=>navigate("/service")}>Got to service page</button>
      <button onClick={()=>navigate("/geturl")}>Got to url params pages</button> */}
      {/* eg 2 */}
      {/* <button onClick={()=>handleDynamicNavigation("/about")}>Got to about page</button>
      <button onClick={()=>handleDynamicNavigation("/service")}>Got to service page</button>
      <button onClick={()=>handleDynamicNavigation("/geturl")}>Got to url params pages</button> */}
      {/* eg 3 */}
      <button onClick={()=>handleConditionNavigation(true)}>Got to about page</button>
      <button onClick={()=>handleConditionNavigation(false)}>Got to service page</button>
    </div>
  )
}

export default Home

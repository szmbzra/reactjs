import React , {useEffect} from 'react'
import "./App.css";

const UserTotal = (props) => {

useEffect(()=>{
  console.log("Call with rops");
});

useEffect(()=>{
    console.log("count", props.count);
  },[props.count, props.total]);

  return (
<>
<div className="App">
  <h2>Count  {props.count}</h2>
  <h2>Count  {props.total}</h2>
</div>
</>
  )
}

export default UserTotal

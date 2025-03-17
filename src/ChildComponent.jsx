import React,{memo} from 'react'

function ChildComponent(props) {
    console.log("child components");
  return (
    <>
    <h3>Child Component {props.count}</h3>
    </>
  )
}
export default memo(ChildComponent);
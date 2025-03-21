import React,{memo} from 'react'

function ChildsComponent({increment}) {
    console.log("child rendered");
  return (
   <>
   <button onClick={increment}>Increment</button>
   </>
  )
}

export default memo(ChildsComponent);
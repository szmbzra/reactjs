import React, { useReducer } from 'react'
// reducer function
const reducer = (state, action) =>{
    console.log(state, action);
switch(action.type){
    case "increment" : 
return {count:state.count + 1};
    case "decrement" : 
return {count:state.count -1};
default:
    return state;
}
   
};

export default function Counter() {
    // eg2
    const initialState ={count:0};
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
   <>
   <p>Count {state.count}</p>
   <button onClick={()=>dispatch({type:"increment"})}>Increment Count</button>
   <button onClick={()=>dispatch({type:"decrement"})}>Increment Count</button>
   </>
  )
}

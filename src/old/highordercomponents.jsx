import React,{useState} from 'react'
import "./App.css"

function App() {
  // high orer components
  const withCounter = (WrappedComponent) =>{
    return function withCounter(props){
      const [count, setCount] = useState(0);
      const increment = () =>{
        setCount(count +1);
      }
      return(
        <WrappedComponent {...props} count = {count} increment ={increment} />
      )

    }
  }
  // functional components
const counter = ({count, increment})=>{
  return(
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
};
const CounterWithEnhancemnet = withCounter(counter);
  return (
   <div className="App">
    <h2>High order components</h2>
  {/* eg 1 */}
  {/* <h2>count  {count}</h2>
  <button onClick={()=> setCount(count+1)}>Update count</button> */}
  <CounterWithEnhancemnet />
   </div>
  )
}

export default App
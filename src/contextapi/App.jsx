import React,{createContext} from 'react'
import '../App.css';
import Child1 from './Child1';
//create, provider, consumer
const myContext = createContext();
const myContextNew = createContext();
export default function App() {
    const shareData ="hello from parents";
    const shareDateNew = "muyltiokl";
  return (
    <div className="App">
        <myContext.Provider value={shareData}>
          <myContextNew.Provider value={shareDateNew}>
            <h1>xibrwzr</h1>
          </myContextNew.Provider>
        <h1>context api</h1>
        <Child1/>
        </myContext.Provider> 
    </div>
  )
}
export {myContext,myContextNew}

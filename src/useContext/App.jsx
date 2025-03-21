import React, { createContext } from 'react'
import "../App.css";
import Child1 from './Child1';
// create, provider, usecontext
const MyContext = createContext();
export default function App() {
  const sharedData = "hello from parent";
  return (
 <div className="App">
  {/* eg1 */}
  <MyContext.Provider value={sharedData}>
  <h1>UseContext Hook</h1>
  <Child1/>

    </MyContext.Provider>
 </div>
  )
}
export {MyContext}
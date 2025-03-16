import React from 'react';
import "./App.css";
import "./style.css";
import Style from "./style.module.css"; // import with module
import "./style.scss";

export default function App() {
  const headline = {
color: "red",
backgroundColor: "blue"

  };
  return (
<>
<div className="App">
  <h1>Style in rect</h1>
  {/* eg 1 */}
  <h1 style={{color:"red", backgroundColor:"green"}}>inline css</h1>
  {/* eg 2 */}
  <h1 className="primary">hello world</h1>
  {/* eg 3 in js*/}
  <h1 style={headline}>hello world in js</h1>
  {/* eg 4  css module // automatically defined own css like tailwin*/}
  <h1 className={Style.title}>css module method</h1>
  {/* sass */}
  <h1 className="primary-sass">sass color</h1>


</div>
</>
  )
}

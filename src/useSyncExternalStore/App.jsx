import React,{useSyncExternalStore} from 'react'
import "../App.css"
export default function App() {
    const width = useSyncExternalStore(
        (listener)=>{
        window.addEventListener("resize",listener);
        return()=>{
            window.removeEventListener("resize",listener); 
        };
    },
    ()=>window.innerWidth);
  return (
<>
<div>Usesync external store hook</div>
<h2>window size {width}</h2>
</>
  )
}

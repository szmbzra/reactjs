import React,{useState,useRef,useLayoutEffect} from 'react'
import "../App.css"
export default function App() {
    const [width,setWidth] = useState(0);
    const elementRef = useRef(null);
    useLayoutEffect(()=>{
        if(elementRef.current){
            setWidth(elementRef.current.getBoundingClientRect().width);
        }
    },[]);
  return (
    <div className="App">
        <h1>uselayouteffect hook</h1>
        <div>
            <h2>width measuremnt example</h2>
            <div ref={elementRef} style={{width:"200px", background:"lightblue", margin:"auto"}}>element whose width is measured</div>
        </div>
        <p>width: {width} px</p>
    </div>
  )
}

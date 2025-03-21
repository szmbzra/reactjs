import React,{useTransition,useEffect,useState} from 'react'
import "../App.css"
export default function App() {
    // eg 1
    // const [isPending, startTransition] = useTransition();
    // const [count, setCount] = useState(0);

    // useffect
    // useEffect(()=>{console.log("useState Run ")},[count]);
    // const handleClick = () =>{
    //     startTransition(()=>{
    //         setCount(count +1);
    //     })
    //     console.log("hndle run")}
    // eg 3
    const [isPending, startTransition] = useTransition();
    const [input, setInput] = useState();
    const [dataList, setDataList] = useState([]);
    const DataSize = 10;
    // function
    const handleChange = (e) =>{
        setInput(e.target.value);
        startTransition(()=>{
            const a =[];
            for(let i=0; i<DataSize; i++){
                a.push(e.target.value);
            }
            setDataList(a);
        });
    }
  return (
    <div className="App">
    {/* eg 1 */}
    {/* <h2>Count  {count}</h2>
    <button onClick={handleClick}>Update COunt</button> */}
        <h1>Use Transition Hook</h1>
        {/* ege 2 */}
        <input type="text" value={input} onChange={handleChange}/>
        
        {isPending? "loading" : dataList.map((item,index)=>{
          return <div key={index}>{item}</div>  
        })}
    </div>
  )
}

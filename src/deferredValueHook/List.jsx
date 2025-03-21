import {useMemo, useDeferredValue,useEffect} from 'react'

export default function List({input}) {
    const DataSize = 500;
    const deferredInput = useDeferredValue(input);
    const list = useMemo(()=>{
        const a =[];
        for(let i= 0; i<DataSize; i++){
            a.push(<div key={i}>{input}</div>);
        }
      return a;
    },[deferredInput]);
    useEffect(()=>{
        console.log(`input ${input} \nDeferred: ${deferredInput}`)
    });
  return list;

}
import React from 'react'
import { useSearchParams } from 'react-router-dom'

function GetURLParams() {
    const [searchParams, setSearchParams] =useSearchParams();
    console.log(searchParams.get("name"));
    console.log(searchParams.get("city"));
    console.log(searchParams.get("country"));
    const name = searchParams.get("name");
    const city = searchParams.get("city");
    const country = searchParams.get("country");
  return (
    <div>
      <h1>Get URL params</h1>
      <h3>nme L : {name}</h3>
      <h3>city L : {city}</h3>
      <h3>country : {country}</h3>
      <button onClick={()=>setSearchParams({name:"sam bajrac",city:"new delhi", country:"india",})}>Update URL param value</button>
   <input type="text" onChange={(e)=>setSearchParams({job: e.target.value})} placeholder='set ore url pram' />
    </div>
  )
}

export default GetURLParams

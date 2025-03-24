import React,{useState,useEffect} from 'react'


function Getmethod() {
    const [data,setData] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
    console.log(response);
    if(!response.ok){
throw new Error("network fail");
    }
    return response.json();
})
.then((data)=>{
    setData(data);
    setloading(false);
    console.log(data);
})
.catch((error)=>{console.log("error")});
    },[]);
  return (
    <div>{
        loading ? (<p>Loading...</p>) : (
            <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((list,index)=>(
                        <tr key={index}>
                        <td>{list.id}</td>
                        <td>{list.title}</td>
                        <td>{list.body}</td>
                    </tr>
                    ))
                }

            </tbody>
        </table>   
        )
        }

    </div>
  )
}

export default Getmethod

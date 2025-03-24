import React,{useState,useEffect} from 'react'

function DeleteMethod() {
    // state to store mock daa
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    // fetch mock data from the json placeholder api
    const fetchData = async () => {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if(!response.ok){
                throw new Error("network response was not ok");
            }
            const jsonData = await response.json();
            setData(jsonData);
            setLoading(false);
        }catch(error){
            console.log("error data", error);
        }
    };
    // initial data fetch on component mount
    useEffect(()=>{
        fetchData();
    },[]);
    // delete data based on its id
    const handleDelete = (id) =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method:"DELETE",
        }).then((response)=>{
            if(!response.ok){
                throw new Error ("network response was not ok");
            }
            return response.json();
        })
        .then(()=>{
            setData(data.filter((item)=>item.id !==id));
        })
        .catch((error)=>console.log("error deleting data",error))
    }
  return (
    <div>
    {loading ?(
        <p>Loading...</p>
    ):(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item)=>(
               <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                </td>
               </tr>
                ))}
            </tbody>
        </table>
    )}
    </div>
  )
}

export default DeleteMethod

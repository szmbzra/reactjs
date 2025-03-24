import React,{useState,useEffect} from 'react'

function Upatemethod() {
    const [postData, setPostData] = useState({
        id:1,
        title:"",
        body:"",
    });
const [message, SetMessage] = useState("");
const [loading, setLoading] = useState(false);
const handleChange = (e) =>{
    const {name,value} = e.target;
    setPostData({
        ...postData,
        [name]:value,
    });
}
const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true);
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postData.id}`;
    const requestOptions = {
        method: "PUT",
        headers:{
            "content-Type": "application/json",
        },
        body:JSON.stringify(postData)
    }
    // send the put (update) request
    fetch(apiUrl, requestOptions).then((response)=>response.json()).then((data)=>{
        SetMessage("post updated successfully");
        console.log(data);
    })
    .catch((error)=>{
        console.log("error", error);
        SetMessage("ERROR upating the post");
    })
    .finally(()=>{
        setLoading(false);
    })
}
// load the initial post data when the component mounts.
useEffect(()=>{
    const postId = postData.id;
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(apiUrl).then((response)=>response.json()).then((data)=>{
        setPostData(data);
    })
    .catch((error)=>{
        console.log("error", error);
    })
},[postData.id]);
  return (
  <>
{loading && <p>Loading...</p>}
{message && <p>{message}</p>}
<form action="" onSubmit={handleSubmit}>


<div>
    <label htmlFor="">Title:</label>
    <input type="text" name="title" value={postData.title} onChange={handleChange} />
</div>
<div>
    <label htmlFor="">Body:</label>
    <textarea name="body" value={postData.body}  onChange={handleChange}/>
</div>
<button type="submit">Update Post</button>
</form>
  </>
  )
}

export default Upatemethod

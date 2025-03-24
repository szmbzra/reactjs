import React,{useState} from 'react'

function PostMethod() {
  // usestate
  const [formData,setFormData] =useState({
    title: "",
    body:"",
  });

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]:value,
    });
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    // create the request object
    const requestOptions = {
method:"POST",
headers:{
  "content-type":"application/json",
},
body: JSON.stringify(formData),
    }
    // send the post request
    fetch(apiUrl, requestOptions).then((Response)=>Response.json()).then((data)=>{
      // handle the response data
      console.log("response", data);
    })
    .catch((error)=>{
      console.log("error", error);
    })
  }
  return (
<>
<form action="" onSubmit={handleSubmit}>
<div>
<label htmlFor="">Title</label>
<input type="text" name="title" value={FormData.title} onChange={handleChange} />
</div>
<div>
<label htmlFor="">Body</label>
<textarea name="body" id="" value={FormData.body}   onChange={handleChange} />
</div>
<button type="submit">Submit</button>
</form>
</>
  )
}

export default PostMethod

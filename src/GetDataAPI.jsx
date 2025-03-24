import React, {useEffect, useState } from 'react'
import { getPosts,createPost,updatePost,deletePost } from './LocalAPI'
function GetDataAPI() {
    const [posts,setPosts] = useState([]);
    const [newpost,setNewPost] = useState([{
        title:"", body:""
    }]);
    // get request
    useEffect(()=>{
getPosts().then((response)=>{
    setPosts(response.data);
    console.log(response.data);
})
.catch((error)=>{
    console.error("error fetching post", error);
})
    },[]);
    // update post
    const handleUpdatePost = (postId,updateData) =>{
updatePost(postId,updateData).then((response)=>{
    const updatedPosts = posts.map((post)=>post.id === postId ? response.data : post);
    setPosts(updatedPosts);
    console.log(updatePost);
})
.catch((error)=>{
    console.error("error upadating post", error);
})
    }
    const handleDeletepost = (postId) =>{
        deletePost(postId).then(()=>{
            const updatedPosts = posts.filter((post)=>post.id !== postId);
            setPosts(updatedPosts);
        })
        .catch((error)=>{
            console.error("error delete posts",error);
        })
    }
  return (
    <>
    <h1>Post</h1>
    <ul>
        {posts.map((post)=>(
            <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <button onClick={()=>
                handleUpdatePost(post.id,{
                    title:"updated",
                    body:"update body",
                })
                }>Update</button>
                <button onClick={()=>handleUpdatePost(post.id)}>Delete</button>
            </li>
        ))}
    </ul>
    <hr />
    <br />
    <h2>Create new post</h2>
    <input type="text" placeholder='title' value={newpost.title} 
   onChange={()=>setNewPost({...newPost, title:e.target.value})} 
    />
    </>
  )
}

export default GetDataAPI

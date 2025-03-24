import React from 'react'
import { useParams } from 'react-router-dom';

// mock data
const userData = {
    users:[
        {id:1, name:"user 1"},
        {id:2, name:"user 2"},
        {id:3, name:"user 3"},
        {id:4, name:"user 4"},
    ],
};



function userProfile() {
    const {userId} = useParams();
     console.log(userId);
     const user = userData.users.find((user)=> user.id === parseInt(userId));
  return (
    <div>
<h2>User Profile</h2>
{
user ? (
<div>
<h3>name: {user.name}</h3>
<p>Id {user.id}</p>
</div>
) : (<p>user not found</p>
)
}
    </div>
  )
}

export default userProfile

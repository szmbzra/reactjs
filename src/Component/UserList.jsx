import React from 'react'
import { Link } from 'react-router-dom';

// mock data
const userData = {
    users:[
        {id:1, name:"user 1"},
        {id:2, name:"user 2"},
        {id:3, name:"user 3"},
        {id:4, name:"user 4"},
    ],
};



function UserList() {
  return (
    <div>
      <h1>userlist</h1>
      <ul>
{userData.users.map((user)=>(
    <li key={user.id}>
        <Link to ={`/user/${user.id}`}>{user.name}</Link>
    </li>
))}
      </ul>
    </div>
  )
}

export default UserList

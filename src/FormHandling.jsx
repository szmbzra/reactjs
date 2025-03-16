import React,{useState} from 'react'

export default function FormHandling() {
    const [formData, setFormData] = useState(
{
username:'',
email:'',
password:'',
isSubscribed:'',
role:''

} );
const handleChange = (event) => {
    const {name, value, type, checked} = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData({
        ...formData,
        [name]:fieldValue
    });
}
const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data', formData);
}
  return (
   <>
   <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="username">username:</label>
        <input type="text" name="username" 
        id="username"
        value={formData.username}
        onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" 
        id="email"
        value={formData.email}
        onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" 
        id="password"
        value={formData.password}
        onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor="isSubscribe">Subscribe:</label>
        <input type="checkbox" name="isSubscribed" 
        id="isSubscribed"
        value={formData.isSubscribed}
        onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor="role">Role:</label>
    <select name="role" id="role" 
    value={formData.role}
        onChange={handleChange}>
    <option value="">Select Role</option>
    <option value="admin">admin</option>
    <option value="user">user</option>
    <option value="guest">Guest</option>
    </select>
    </div>
    <button type="submit">Submit</button>
   </form>
   </>
  )
}

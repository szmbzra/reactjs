import React, {useState} from 'react'

export default function FormValidation() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState({});
const [submittedData, SetSubmittedData] = useState(null);
const validateForm = () =>{
let isValid = true;
const newErrors = {};
if (!name.trim()){
newErrors.name = "Name is required";
isValid = false;
}
if (!email.trim()){
    newErrors.email = "Email is required";
    isValid = false;
    }else if(!/\S+@\S+\.\S+/.test(email)){
newsErrors.email = "Email is invalid";
isValid = false;
    }
    if (!password.trim()){
        newErrors.password = "Password is required";
        isValid = false;
        }else if(password.length < 6){
newsErrors.password
 ="password should be more than 6"
        }
setErrors(newErrors);
return isValid;
}
const handleSubmit = (event) => {
event.preventDefault();
if(validateForm()){
const submittedDate = {
    name, email, password
};
SetSubmittedData(submittedData);
console.log("form submited", submittedData);
}

}
  return (
    <>
    <form onSubmit={handleSubmit}>
       <div>
        <label>Name:</label>
        <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)} />
        {errors.name && <span className="error">{errors.name}</span>}
       </div>
       <div>
        <label>Email:</label>
        <input type="email" name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)} />
        {errors.email && <span className="error">{errors.email}</span>}
       </div>
       <div>
        <label>password:</label>
        <input type="password" name="" id="" value={password} onChange={(e)=>setPassword(e.target.value)} />
        {errors.password && <span className="error">{errors.password}</span>}
       </div>
<button type="submit">Submit</button>
    </form>
    {
submittedData && (
    <div>
        <h2>Submitted Data</h2>
        <p>Name: {submittedData.name}</p>
        <p>Email: {submittedData.email}</p>
        <p>Password: {submittedData.password}</p>
    </div>
)

    }
    </>
  )
}

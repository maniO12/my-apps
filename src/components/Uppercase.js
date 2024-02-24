
import React, { useState } from 'react'
import axios from "axios";
const Uppercase = () => {

const [email,setemail] = useState('');
const [firstname,setfirstname] = useState('');
const [lastname,setlastname] = useState('');
const[mobileno,setmobileno] = useState('');

const handleEmail = (e)=> {
     setemail(e.target.value);
     console.log(e.target.value);
}

const handleName = (e)=> {
   setfirstname(e.target.value);
   console.log(e.target.value);
}

const handleFame = (e)=> {
  setlastname(e.target.value);
  console.log(e.target.value);
}

const handleNo = (e)=> {
  setmobileno(e.target.value);
  console.log(e.target.value);
}

const submitHandler = async(e) => {
   e.preventDefault();
   if(!email.includes("@")){
    alert("Email is Invalid");
    setemail("");
    return;
   }
   if(firstname.length < 3 || lastname.length<3){
    alert("First Name and last name should be greater than 3");
    setfirstname('');
    setlastname('');
    return;
   }
   if(mobileno.length<10 || mobileno.length>10){
    alert("Mobile Number is Invalid");
    setmobileno('');
    return;
   }
   let start = "+91";
   let end = mobileno;
   let finalNumber = start + end;
   setmobileno(finalNumber);
   const status = await axios.post("http://localhost:5200/getBusregistrations",{
    firstname:firstname,
    lastname:lastname,
    email:email,
    mobileno:mobileno
   });
   console.log(status);

}

  return (
  <div>
       
  <div class="container">
    <h1>Registration</h1>
    <p>Please fill  this form to book your bus.</p>
    </div>


 <div div class="form">
   
    <label for="email"><b>Email:</b></label>
    <input type="text" placeholder="Enter Email" onChange={handleEmail} id="email" value={email} required></input>

    <label for="Firstname"><b>First Name:</b></label>
    <input type="text" placeholder="First name" value={firstname} onChange={handleName} id="name1" required></input>
  
    <label for="Lastname"><b>Last Name:</b></label>
    <input type="Last-name" placeholder="Last name" value={lastname} onChange={handleFame} id="name2" required></input>
 
    <label for="email"><b>Mobile no:</b></label>
    <input type="text" placeholder="mobile no" onChange={handleNo} id="num" value={mobileno} required></input>

    <input type="submit" onClick={submitHandler} />
    
    
   </div>
  </div>
  
      
  )
}

export default Uppercase

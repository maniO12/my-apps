
import React, { useState } from 'react'
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

  return (
  <div>
       
  <div class="container">
    <h1>Registration</h1>
    <p>Please fill  this form to book your bus.</p>
    </div>


 <div div class="form">
   
    <label for="email"><b>Email:</b></label>
    <input type="text" placeholder="Enter Email" onChange={handleEmail} id="email" required></input>

    <label for="Firstname"><b>First Name:</b></label>
    <input type="password" placeholder="First name" onChange={handleName} id="name1" required></input>
  
    <label for="Lastname"><b>Last Name:</b></label>
    <input type="Last-name" placeholder="Last name"onChange={handleFame} id="name2" required></input>
 
    <label for="email"><b>Mobile no:</b></label>
    <input type="text" placeholder="mobile no" onChange={handleNo} id="num" required></input>
    
    
   </div>
  </div>
  
      
  )
}

export default Uppercase

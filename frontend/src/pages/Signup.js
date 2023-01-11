import React,{useState} from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import M from 'materialize-css'
import './Signup.css'

function Signup() {
  const navigate= useNavigate();
  const[firstname,setfirstname]= useState("");
  const[lastname,setlastname]= useState("");
  const[email,setemail]= useState("");
  const[password,setpassword]= useState("");

const Registor=()=>{
  if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
    M.toast({html:'enter valid email', classes:"#d50000 red accent-4"})

    return
  }
fetch("/re",{
  method:"post",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    firstname:firstname,
    lastname:lastname,
    email:email,
    password:password
  })
})
.then(response=>response.json())
.then(function(data){
  console.log(data);


if(data.error){
  
  M.toast({html: data.error, classes:"#d50000 red accent-4"})

}
else {
  M.toast({html: data.result, classes:"#2e7d32 green darken-3"})
  navigate('/Login')
}

})
.catch(error=>{
  console.log(error);
  })
  

}
  return (
    <div className="login-container">
      
    <div className='card login-card'>
    <h2>Instagram</h2>
    <input type="text" placeholder='firstname'
    value={firstname}
    onChange={(event)=>setfirstname(event.target.value)}
    
    
    />

      
   
    <input type="text" placeholder='lasname'
    value={lastname}
    onChange={(event)=>setlastname(event.target.value)}
    
    
    
    />




        <input type="text" placeholder='email'
        value={
        email
        }
        onChange={(event)=>setemail(event.target.value)}
        
        
        />
        <input type="password" placeholder='Password'
        value={password}
        onChange={(event)=>setpassword(event.target.value)}
        
        
        />
        
       
        <button onClick={() => Registor()} className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">
                    Signup
                </button>
<Link to='/Login'><h6>already have an accound</h6></Link>
    </div>


</div>
  )
}

export default Signup
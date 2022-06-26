import React from 'react'
import { useState } from 'react';
 const Login = () => {
    const[user,setUser]=useState({
        email:"",
        password:""
    })
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUser({...user,[e.currentTarget.id]:e.currentTarget.value})
    }
  return (
    <>
    <div className="wrapper fadeInDown">
  <div id="formContent">
   

  
    <div className="fadeIn first">
      Login
    </div>

    
    <form >
       
            <div className='label-container'>
            <label>Email</label>
            </div>
            
        <input type="text" id="email" className="fadeIn second" name="emailAddress" onChange={handleChange} value={user.email} autoComplete="address-level4" />
        
   
        <div className='label-container'>
            <label>Password</label>
            </div>
      <input type="password" id="password" className="fadeIn third" name="password" onChange={handleChange}  value={user.password} />
      
     
      <input type="submit" className="fadeIn fourth" value="Log In"/>
    </form>

    
    <div id="formFooter">
      <a className="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
    </>
  )
}
export default Login;

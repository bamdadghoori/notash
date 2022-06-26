import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
// import m3o from "m3o"
// import process from "m3o"
import { default as m3o } from 'm3o';
m3o(process.env.M3O_API_TOKEN);


 const Login = () => {
    const [time,setTime]=useState("00:00:00")
    
    const currentTime=()=>{
        var today = new Date();
        setTime(today.toLocaleString())
      
        console.log()
    }
    useEffect(()=>{
          currentTime()
    },[])
    const handleButton=()=>{
        
            // try{
                
            //     let rsp =  m3o.user.create({
            //         email: "joe@example.com",
            //         id: "user-1",
            //         password: "Password1",
            //         username: "joe",
            //       });
            // }
            // catch(er){
            //     console.log(er)
            // }
     
        
        }
  setTimeout(currentTime,1000)

    const[user,setUser]=useState({
        email:"",
        password:""
    })
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUser({...user,[e.currentTarget.id]:e.currentTarget.value})
    }
  
    // const handleButton=async()=>{
    //     try{
    //         let rsp = await m3o().user.create({
    //             email: "joe@example.com",
    //             id: "user-1",
    //             password: "Password1",
    //             username: "joe",
    //           });
    //           console.log(rsp);
    //     }
    //     catch(er){
    //         console.log(er)
    //     }
       
         
    // }

    const handleSubmit=async(e:React.FormEvent)=>{
      e.preventDefault()
      try{
 //    const response=await axios.post(url,JSON.stringify(user),config)
            //    console.log(response)
            // @ts-ignore
            let rsp =  m3o.user.login({
                email: "joe@example.com",
                password: "password1",
              });
              console.log(rsp);
           
          }
      
          catch(er){
            console.log(er)
     }  }

         
         
    //   const url="https://api.m3o.com/v1/user/Login";
    //   const config={
    //     headers:{
    //         "Content-Type": "application/json" ,
    //         "Authorization": "$M3O_API_TOKEN" 
    //      }
    //   }
    //     const instant= axios.create({
    //          baseURL:"https://api.m3o.com/v1/user/Login",
    //          headers:{
    //             "Content-Type": "application/json" ,
    //             "Authorization": "Bearer $M3O_API_TOKEN" 
    //          }
    //     })
       
      
  
  

    
  return (
    <>
    <div className="wrapper fadeInDown">
        {time}
        <button onClick={handleButton}>Create</button>
  <div id="formContent">
   

  
    <div className="fadeIn first">
      Login
    </div>

    
    <form onSubmit={handleSubmit}>
       
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

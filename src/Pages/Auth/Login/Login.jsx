import React from 'react'
import "./Login.css"
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";


 const Login = () => {
    const [seePassword, setSeePassword] = useState(false)
    
  return (
    <div className='Login__container'>
        <div className='column'>
      
            <div >
            <h2>Welcome back </h2>
            <p>Please enter your details to login</p>
            </div>
            

            <form className="input">
                <input type="email"  placeholder='Email'/>
                <div className='password'>
                <input type="password" placeholder='Password'/>
                {seePassword?<IoEyeOff onClick={()=>setSeePassword(!seePassword)}/>: <IoEye onClick={()=>setSeePassword(!seePassword)}/>}
                </div>
                 <div className='column__p'>
                    <button>Log in</button>
                    <p>Forgot your password?</p>
                 </div>
            </form>

            <div className="social">

            </div>
        </div>
    </div>
  )
}
export default Login

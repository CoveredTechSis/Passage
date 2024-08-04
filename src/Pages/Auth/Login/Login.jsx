import React from 'react'
import "./Login.css"
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from 'react';
import { useForm } from "react-hook-form";
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
            

            <form className="input"  onSubmit={(e)=>loginFunc(e)}>
                <input type="email"  placeholder='Email' required={true} {...register("email")}/>
                <div className='password'>
                <input placeholder='Password' type={seePassword? "text":"password"} {...register("password")} required={true}/>
                {seePassword?<IoEyeOff onClick={()=>setSeePassword(!seePassword)}/>: <IoEye onClick={()=>setSeePassword(!seePassword)}/>}
                </div>
                 <div className='column__p'>
                 <button type="submit" style={loading? {backgroundColor: "white"}:{}} disabled={loading? true: false}>{ loading? "Login in...": "Login"}</button>
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

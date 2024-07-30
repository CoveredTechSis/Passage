import React from 'react'
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";

 const Login = () => {
  return (
    <div className='Login__container'>
        <div className='column1'>
            <img src="" alt="" />
            <div>
                <h3>New Here?</h3>
            </div>
            <div className='column1__p'>
                <p>Sign up and benefit from a whole world of opportunities.</p>
               <button> <Link to="/signup">Sign Up</Link></button>
            </div>
        </div>
        <div className='column2'>
            <h2>Login to your <br /><span>account</span> </h2>
            

            <div className="input">
                <input type="email"  placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                 <div className='column2__p'>
                    <button>Sign in</button>
                    <p>Forgot your password?</p>
                 </div>
            </div>
        </div>
    </div>
  )
}
export default Login

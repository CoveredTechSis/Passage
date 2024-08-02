import React from 'react'
import "./Sign.css"
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from 'react';
import { FormSwitch } from '../FormSwitch/FormSwitch';

const SignUp = () => {
  const [seePassword, setSeePassword] = useState(false)
  return (
    <div className='Signup__container'>
        <div className='column'>
          <div>
            <FormSwitch/>
          </div>
       <div>
       <img src="" alt="" />
            <h2>New Here ?</h2>
            <p>Sign up and benefit from a  <br /><span> whole world of opportunities.</span></p>

       </div>
            <div className="input">
                <input type="email"  placeholder='Email'/>
                <div className='password'>
                <input type="password" placeholder='Password' />
                {seePassword?<IoEyeOff onClick={()=>setSeePassword(!seePassword)}/>: <IoEye onClick={()=>setSeePassword(!seePassword)}/>}
                </div>
                <div className='password'>
                <input type="password" placeholder='Confirm password' />
                {seePassword?<IoEyeOff onClick={()=>setSeePassword(!seePassword)}/>: <IoEye onClick={()=>setSeePassword(!seePassword)}/>}
                </div>
                 <div className='column1__p'>
                    <button>Sign up</button>
                 </div>
           </div>
        </div>

    </div>
  )
}
export default SignUp

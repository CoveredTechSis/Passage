import React from 'react'
import './FormSwitch.css'
import { useState } from 'react'
 import Login from '../Login/Login';
 import SignUp from '../SignUp/SignUp';

export const FormSwitch = () => {
    const [isLogin, setIsLogin] = useState(false)
    const handleSwitch = () => {
        setIsLogin(!isLogin);
    };

  return (
    <div className='Formswitch__container'>
        <button onClick={handleSwitch}>Switch to {isLogin ? 'Sign Up' : 'Log In'}</button>
        {isLogin ? <Login/> : <SignUp/>  }
    </div>
  )
}

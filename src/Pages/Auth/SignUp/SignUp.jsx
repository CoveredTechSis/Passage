import React from 'react'
import "./Sign.css"

const SignUp = () => {
  return (
    <div className='Signup__container'>
        <div className='column1'>
       <div>
       <img src="" alt="" />
            <h1>Create a free account</h1>
            <p>Sign up and benefit from a whole <br /><span> world of opportunities.</span></p>

       </div>
            <div className="input">
                <input type="email"  placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                 <div className='column1__p'>
                    <button>Sign up</button>
                 </div>
           </div>
        </div>

        <div className="column2">
            <h2>One Of Us</h2>
            <button>Sign in</button>
        </div>

    </div>
  )
}
export default SignUp

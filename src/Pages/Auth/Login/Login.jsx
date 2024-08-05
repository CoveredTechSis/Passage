import React from 'react';
import { useForm } from 'react-hook-form';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { FaApple } from 'react-icons/fa';
import linkedin from '/icons/linkedin.svg';
import fb from '/icons/fb.svg';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [seePassword, setSeePassword] = React.useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  
    navigate('/Home');
  const onSubmit = data => {
    
    console.log('User data:', data);
    // Example: Handle login logic here
  };

  return (
    <div className='Login__container'>
      <div className='column'>
        <div>
          <h2>Welcome back</h2>
          <p>Please enter your details to login</p>
        </div>

        <form className="input" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder='Email'
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
          
          <div className='password'>
            <input
              placeholder='Password'
              type={seePassword ? "text" : "password"}
              {...register('password', { 
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long'
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: 'Password must contain letters, numbers, and special characters'
                }
              })}
            />
            {seePassword ? 
              <IoEyeOff onClick={() => setSeePassword(!seePassword)} /> 
              : <IoEye onClick={() => setSeePassword(!seePassword)} />}
          </div>
          {errors.password && <p>{errors.password.message}</p>}
          
          <div className='column__p'>
            <button type="submit"><Link to ="/">Log in</Link></button>
            <p>Forgot your password?</p>
          </div>
        </form>

        <p>Or</p>

        <div className="socials">
          <img src={fb} alt="Facebook" />
          <FaApple />
          <img src={linkedin} alt="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default Login;

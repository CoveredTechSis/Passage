import React from 'react';
import "./Sign.css";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const [seePassword, setSeePassword] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  // Watch the password field to validate confirm password
  const password = watch('password', '');

  const onSubmit = (data) => {
    // Handle the signup logic here
    console.log('Signup data:', data);
  };

  return (
    <div className='Signup__container'>
      <div className='column'>
        <div>
          <img src="" alt="" />
          <h2>New Here?</h2>
          <p>Sign up and benefit from a<br /><span>whole world of opportunities.</span></p>
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
              type={seePassword ? "text" : "password"} 
              placeholder='Password'
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
          
          <div className='password'>
            <input 
              type={seePassword ? "text" : "password"} 
              placeholder='Confirm password'
              {...register('confirmPassword', { 
                required: 'Confirm password is required',
                validate: value => value === password || 'Passwords do not match'
              })}
            />
            {seePassword ? 
              <IoEyeOff onClick={() => setSeePassword(!seePassword)} /> 
              : <IoEye onClick={() => setSeePassword(!seePassword)} />}
          </div>
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          
          <div className='column1__p'>
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

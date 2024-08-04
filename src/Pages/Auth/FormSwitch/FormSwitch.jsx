import React, { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import "./FormSwitch.css";

const FormSwitch = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };


  return (
    <div className="form-switcher">
      {isOverlayVisible && (
        <div className="overlay">
           <div className="close-overlay" onClick={toggleOverlay}>X</div>
        </div>
      )}



      <div className="switcher__container">
       <div>
       <button
          className={isLogin ? "active" : ""}
          onClick={() => setIsLogin(true)}
        >
          Log in
        </button>
       </div>
       <div>
       <button
          className={!isLogin ? "active" : ""}
          onClick={() => setIsLogin(false)}
        >
          Sign up
        </button>
       </div>
       
      </div>
      <div className="form-content">
        {isLogin ? <Login/> : <SignUp/>}
      </div>
    </div>
  );
};

export default FormSwitch;



// import React, { useState } from 'react';

// const Login = () => <div>Login</div>;
// const SignUp= () => <div>SignUp</div>;

// const SwitchComponent = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const handleSwitch = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className='switch__Container'>
//       <button onClick={handleSwitch}>
//          {isLogin ? 'SignUp' : 'Login'}
//       </button>
//       {isLogin ? <Login/> : <SignUp/>}
//     </div>
//   );
// };

// export default SwitchComponent;

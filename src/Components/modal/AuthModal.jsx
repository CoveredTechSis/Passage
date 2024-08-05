import { MdOutlineClose } from "react-icons/md";
import "./authModal.css";
import { useState } from "react";
import Login from '../../Pages/Auth/Login/Login'
import SignUp from '../../Pages/Auth/SignUp/SignUp';


const AuthModal = ({ setModal }) => {
  const [login, setLogin] = useState(true);
  return (
    <div className="authModal__container">
      <div className="authModal__wrapper">
        <MdOutlineClose
          className="MdOutlineClose"
          onClick={() => setModal(false)}
        />
        
        <div className="toggle__button">
          <div
            className="toggle1 toggleLogin"
            style={{ background: login ? "#0065c9" : null }}
            onClick={() => setLogin(!login)}
          >
            Login
          </div>
          <div
            className="toggle1 toggleSignUp"
            onClick={() => setLogin(!login)}
            style={{ background: !login ? "#0065c9" : null 
            }}
          >
            Sign up
          </div>
        </div>
        {/* {login ? <form action="">Login</form> : <form action="">Sigup</form>} */}
        {login ? <Login/> : <SignUp/>}
      </div>
    </div>
  );
};

export default AuthModal;

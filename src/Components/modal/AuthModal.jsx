import { MdOutlineClose } from "react-icons/md";
import "./authModal.css";
import { useState } from "react";
import LoginFom from "../LoginForm/LoginFom";
import SignUpForm from "../SignUpForm/SignUpForm";

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
            style={{ background: login ? "blue" : null }}
            onClick={() => setLogin(!login)}
          >
            Login
          </div>
          <div
            className="toggle1 toggleSignUp"
            onClick={() => setLogin(!login)}
            style={{ background: !login ? "blue" : null }}
          >
            Signup
          </div>
        </div>
        {login ? <LoginFom /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default AuthModal;

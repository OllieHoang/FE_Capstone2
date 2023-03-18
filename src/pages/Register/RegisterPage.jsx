import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../Register/RegisterPage.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  const onYesIHaveClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className="register-page">
      <img
        className="objectother-07-icon"
        alt=""
        src="/objectother-07@2x.png"
      />
      <div className="rectangle-parent">
        <input className="frame-child" type="text" />
        <input className="frame-item" type="text" />
        <input className="frame-inner" type="password" />
        <input className="rectangle-input" type="email" />
        <input className="frame-child1" type="password" />
        <div className="username">Username:</div>
        <div className="full-name">Full name:</div>
        <button className="yes-i-have-container" onClick={onYesIHaveClick}>
          <span className="yes-i-have">{`Yes i have an account? `}</span>
          <span className="login">Login</span>
          <span className="yes-i-have">{` `}</span>
        </button>
        <button className="rectangle-group">
          <div className="group-item" />
          <div className="register">Register</div>
        </button>
        <div className="password">Password:</div>
        <div className="email">Email:</div>
        <div className="confirm-password">Confirm Password:</div>
        <b className="please-fill-out">Please Fill out form to Register!</b>
        <div className="social-media-icons">
          <button className="google-mail">
            <img className="layer-2-icon" alt="" src="/layer-2.svg" />
          </button>
          <button className="google-mail">
            <img className="layer-2-icon" alt="" src="/layer-21.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

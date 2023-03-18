import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onDontHaveAndClick = useCallback(() => {
    navigate("/register-page");
  }, [navigate]);

  return (
    <div className="login-page">
      <div className="login-page-inner">
        <div className="social-media-icons-parent">
          <div className="social-media-icons1">
            <button className="google-mail1">
              <img className="layer-2-icon2" alt="" src="/layer-22.svg" />
            </button>
            <button className="google-mail1">
              <img className="layer-2-icon2" alt="" src="/layer-23.svg" />
            </button>
          </div>
          <input className="frame-child2" type="text" />
          <input className="frame-child3" type="password" />
          <div className="username1">Username:</div>
          <button
            className="dont-have-and-container"
            onClick={onDontHaveAndClick}
          >
            <span className="dont-have">{`Dont  have and account? `}</span>
            <span className="register1">Register</span>
          </button>
          <b className="welcome-back">Welcome Back!</b>
          <button className="rectangle-container">
            <div className="group-inner" />
            <div className="login1">Login</div>
          </button>
          <div className="password1">Password:</div>
        </div>
      </div>
      <div className="objectother-03">
        <img
          className="objectother-03-icon"
          alt=""
          src="/objectother-03@2x.png"
        />
      </div>
    </div>
  );
};

export default LoginPage;

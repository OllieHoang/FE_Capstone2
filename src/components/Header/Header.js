import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [openMenuAccount, setOpenMenuAccount] = useState(false);
    const navigate = useNavigate();

    const onAClick = useCallback(() => {
        navigate('/login');
    }, [navigate]);

    const onA1Click = useCallback(() => {
        navigate('/register');
    }, [navigate]);

    const handleMenuHeader = () => {
        setOpenMenuAccount(!openMenuAccount);
    };
    const username = localStorage.getItem('fullname');
    console.log(username);
    return (
        <div className="ul2">
            <button className="rules">Rules</button>
            <button className="demo">Demo</button>
            <button className="shorten-links">Shorten Links</button>
            <button className="chatgpt-vietnam">Chatgpt vietnam</button>
            <button className="tools">Tools</button>
            <div
                className="a"
                onClick={() => {
                    handleMenuHeader();
                }}
            >
                {username}
            </div>
            {/* <button className="a" onClick={onAClick}>
                <img className="frame-icon9" alt="" src="/frame.svg" />
                <div className="login2">Login</div>
            </button>
            <button className="a1" onClick={onA1Click}>
                <img className="frame-icon10" alt="" src="/frame1.svg" />
                <div className="register2">Register</div>
            </button> */}
        </div>
    );
};

export default Header;

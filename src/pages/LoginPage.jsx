import React from 'react';
import login from '../assets/imgs/login.png';

const LoginPage = () => {
    return (
        <section>
            <div>
                <div className="mx-auto ">
                    <div>
                        <h3>Welcome Back!</h3>
                    </div>
                    <div>
                        <div>Username:</div>
                        <input type="text" />
                    </div>
                    <div>
                        <div>Password:</div>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <img src={login} alt="" />
                </div>
            </div>
        </section>
    );
};

export default LoginPage;

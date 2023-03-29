import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgetPassword from './pages/ForgetPassword';
import VerifyAccount from './pages/VerifyAccount';
import ResetPassword from './pages/ResetPassword';

function App() {
    return (
        <div className="">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/register" element={<RegisterPage />}></Route>
                    <Route path="/forgotpw" element={<ForgetPassword />}></Route>
                    <Route path="/verifyaccount" element={<VerifyAccount />}></Route>
                    <Route path="/resetpassword" element={<ResetPassword />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;

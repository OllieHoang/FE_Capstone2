import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgetPassword from './pages/ForgetPassword';
import VerifyAccount from './pages/VerifyAccount';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import DeleteAccount from './pages/DeleteAccount';
import EditAccount from './pages/EditAccount';
import Test from './pages/Test';
import QRcode from './pages/QRcode';
import Card from './pages/Card';

function App() {
    return (
        <div className="">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/home/:id" element={<HomePage />}></Route>
                    <Route path="/test" element={<Test />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/register" element={<RegisterPage />}></Route>
                    <Route path="/forgotpw" element={<ForgetPassword />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/editacc" element={<EditAccount />}></Route>
                    <Route path="/verifyaccount" element={<VerifyAccount />}></Route>
                    <Route path="/resetpassword" element={<ResetPassword />}></Route>
                    <Route path="/delete" element={<DeleteAccount />}></Route>
                    <Route path="/qrcode" element={<Card />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;

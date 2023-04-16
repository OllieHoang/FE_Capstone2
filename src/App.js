import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgetPassword from './pages/ForgetPassword';
// import VerifyAccount from './pages/VerifyAccount';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import DeleteAccount from './pages/DeleteAccount';
import EditAccount from './pages/EditAccount';
import Test from './pages/Test';
import Card from './pages/Card';
import Page from './pages/HomePage';
import Containt from './components/Containt';
import AdminPage from './pages/AdminPage';

function App() {
    return (
        <div className="">
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/register" element={<RegisterPage />}></Route>
                    <Route path="/forgotpw" element={<ForgetPassword />}></Route>
                    <Route path="/resetpassword" element={<ResetPassword />}></Route>
                    {/* <Route path="/verifyaccount" element={<VerifyAccount />}></Route> */}

                    <Route
                        path="/"
                        element={
                            <Page>
                                <Containt />
                            </Page>
                        }
                    ></Route>
                </Routes>
                <div>
                    <Routes>
                        <Route
                            path="/home"
                            element={
                                <Page>
                                    <Containt />
                                </Page>
                            }
                        ></Route>
                        <Route path="/test" element={<Test />}></Route>
                        <Route
                            path="/profile"
                            element={
                                <Page>
                                    <Profile />
                                </Page>
                            }
                        ></Route>
                        <Route
                            path="/editacc"
                            element={
                                <Page>
                                    <EditAccount />
                                </Page>
                            }
                        ></Route>
                        <Route
                            path="/qrcode"
                            element={
                                <Page>
                                    <Card />
                                </Page>
                            }
                        ></Route>
                        <Route path="/delete" element={<DeleteAccount />}></Route>
                        <Route path="/admin" element={<AdminPage />}></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;

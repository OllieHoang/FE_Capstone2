import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgetPassword from './pages/ForgetPassword';
// import VerifyAccount from './pages/VerifyAccount';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import DeleteAccount from './pages/DeleteAccount';
import EditAccount from './pages/EditAccount';
import Card from './pages/Card';
import Page from './pages/HomePage';
import Containt from './components/Containt';
import AdminPage from './pages/AdminPage';
import CreateLinkAccount from './pages/CreateLinkAccount';
import Demo from './pages/Demo';
import Appearance from './pages/Appearance';
// import Test from './pages/Test';

function App() {
    return (
        <div className="">
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/register" element={<RegisterPage />}></Route>
                    <Route path="/forgotpw" element={<ForgetPassword />}></Route>
                    <Route path="/resetpassword" element={<ResetPassword />}></Route>
                    {/* <Route path="/test" element={<Test />}></Route> */}

                    {/* <Route path="/verifyaccount" element={<VerifyAccount />}></Route> */}
                </Routes>
                <div>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Page>
                                    <Containt />
                                </Page>
                            }
                        ></Route>
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
                        <Route
                            path="/link"
                            element={
                                <Page>
                                    <CreateLinkAccount />
                                </Page>
                            }
                        ></Route>
                        <Route
                            path="/appearance"
                            element={
                                <Page>
                                    <Appearance />
                                </Page>
                            }
                        ></Route>
                        <Route path="/demo" element={<Demo />}></Route>
                        <Route path="/delete" element={<DeleteAccount />}></Route>
                        <Route path="/admin" element={<AdminPage />}></Route>
                    </Routes>

                    {/* <Routes>
                        <Route path="/admin" element={<AdminPage />}></Route>
                    </Routes> */}
                </div>
            </Router>
        </div>
    );
}

export default App;

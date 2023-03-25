import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
    return (
        <div className="overflow-hidden">
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/regiter" element={<RegisterPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;

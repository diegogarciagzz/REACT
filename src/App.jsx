import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import About from './views/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function RequireAuth({ children }) {
  const isAuth = localStorage.getItem('auth') === 'true';
  const location = useLocation();
  if (!isAuth) return <Navigate to="/login" state={{ from: location }} />;
  return children;
}

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuth(localStorage.getItem('auth') === 'true');
  }, []);

  const isLoginRoute = location.pathname === '/login';

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    setIsAuth(true);
    navigate('/home');
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setIsAuth(false);
    navigate('/login');
  };

  return (
    <>
      {isAuth && !isLoginRoute && <Navbar onLogout={handleLogout} />}
      
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/about" element={<RequireAuth><About /></RequireAuth>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>

      {isAuth && !isLoginRoute && <Footer />}
    </>
  );
}

export default App;

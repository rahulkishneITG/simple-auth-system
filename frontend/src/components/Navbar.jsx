import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg">Auth System</Link>
        <div>
          {user ? (
            <>
              <Link to="/dashboard" className="text-white mr-4">Dashboard</Link>
              {user.role === 'admin' && (
                <Link to="/admin" className="text-white mr-4">Admin</Link>
              )}
              <button onClick={handleLogout} className="text-white">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white mr-4">Login</Link>
              <Link to="/register" className="text-white mr-4">Register</Link>
              <Link to="/forgot-password" className="text-white">Forgot Password</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
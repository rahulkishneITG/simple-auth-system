import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Dashboard() {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4 text-center">Dashboard</h2>
        <p>Welcome, {user.name}!</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </div>
    </div>
  );
}

export default Dashboard;
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const { forgotPassword } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      alert('Password reset link sent (check console)');
    } catch (error) {
      alert('Failed to send reset link');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
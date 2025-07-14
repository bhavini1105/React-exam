import React, { useState } from 'react';

function SignIn() {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email === 'admin@example.com' && user.password === 'admin123') {
      alert('Login Successful');
      localStorage.setItem('auth', true);
      window.location.href = '/rooms';
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h3>Admin Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="admin@example.com"
        />
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="admin123"
        />
        <button type="submit" className="btn btn-primary w-100">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;

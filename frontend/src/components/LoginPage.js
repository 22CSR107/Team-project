import React, { useState } from 'react';

function LoginPage() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = e =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData)
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="login-container">
      <style>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px;
          background-color: #f4f6f8;
          min-height: 50vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .login-form {
          background-color: #fff;
          padding: 30px 40px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }

        .login-form h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group input {
          width: 100%;
          padding: 10px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-sizing: border-box;
        }

        .form-group input:focus {
          border-color: #007BFF;
          outline: none;
        }

        .submit-btn {
          width: 100%;
          padding: 12px;
          background-color: #007BFF;
          color: white;
          border: none;
          font-size: 16px;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #005bb5;
        }
      `}</style>

      <form onSubmit={handleSubmit} className="login-form">
        <h2>Student Login</h2>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;

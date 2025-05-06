import React, { useState } from 'react';

function SignupPage() {
  const [formData, setFormData] = useState({
    student_id: '', firstname: '', lastname: '', email: '', password: '',
    dob: '', address: '', mobilenumber: '', departmentid: '',
    enrollment_year: '', graduation_year: ''
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="signup-container">
      <style>{`
        .signup-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 50px;
          background: #f4f6f8;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .signup-form {
          background-color: #fff;
          padding: 30px 40px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
        }

        .signup-form h2 {
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
          background-color: #0056b3;
          color: white;
          border: none;
          font-size: 16px;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #004094;
        }
      `}</style>

      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Student Sign-Up</h2>
        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <input
              type={key === 'dob' ? 'date' : key === 'password' ? 'password' : 'text'}
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}

export default SignupPage;

import React from 'react';
import './Page.css';

function StudentRegistration() {
  return (
    <div className="page-container">
      <h2>Student Registration</h2>
      <form className="form-layout">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone" required />
        <select>
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <input type="date" />
        <input type="text" placeholder="Course" required />
        <input type="text" placeholder="Department" required />
        <button type="submit">Register Student</button>
      </form>
    </div>
  );
}

export default StudentRegistration;

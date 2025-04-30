import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">College Portal</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/student-registration">Student</Link></li>
        <li><Link to="/instructor-management">Instructor</Link></li>
        <li><Link to="/course-management">Courses</Link></li>
        <li><Link to="/department-details">Departments</Link></li>
        <li><Link to="/grade-reports">Grades</Link></li>
        <li><Link to="/admin-dashboard">Admin</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;

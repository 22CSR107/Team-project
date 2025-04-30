import React from 'react';
import logo from './logo.svg';
import './App.css';

// Importing components
import AdminDashboard from './components/AdminDashboard';
import CourseManagement from './components/CourseManagement';
import DepartmentDetails from './components/DepartmentDetails';
import GradeReports from './components/GradeReports';
import HomePage from './components/HomePage';
import InstructorManagement from './components/InstructorManagement';

import StudentRegistration from './components/StudentRegistration';

function App() {
  return (
    <div className="App">
      <HomePage />
      <AdminDashboard />
      <CourseManagement />
      <DepartmentDetails />
      <GradeReports />
      <InstructorManagement />
      <StudentRegistration />
    </div>
  );
}

export default App;

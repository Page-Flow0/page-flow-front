import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './pages/Login.js';
import React from 'react';
import Test from './pages/test.js'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <Router>
      <Routes>
        {/* 루트 경로로 접속 시 로그인 페이지로 리다이렉트 */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        {/* <Route path="/signup" element={<SignUpForm />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

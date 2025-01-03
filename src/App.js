import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './pages/Login.js';
import SignUpForm from './pages/SignUp.js';
import NTestForm from './pages/NaverAC.js';
import KTestForm from './pages/KakaoAC.js';
import GTestForm from './pages/GooleAC.js';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <Router>
      <Routes>
        {/* 루트 경로로 접속 시 로그인 페이지로 리다이렉트 */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/ntest" element={<NTestForm />} />
        <Route path="/ktest" element={<KTestForm />} />
        <Route path="/gtest" element={<GTestForm />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from '../frontend/components/Login';
import HomePage from '../frontend/components/HomePage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertyPage from './pages/PropertyPage';
import AdminPage from './pages/AdminPage';
import Pand from './pages/Pand';  
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/panden/:id" element={<Pand />} />   
        <Route path="/panden" element={<PropertyPage />} />  
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<PropertyPage />} />  
      </Routes>
    </Router>
  );
}

export default App;

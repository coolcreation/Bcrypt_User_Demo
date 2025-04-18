import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TextNameProvider } from '../context/TextNameContext';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import SigninForm from '../components/SigninForm';
import SignupForm from '../components/SignupForm';
import UserHomePage from '../pages/UserHomePage';


function App() {
  return (
    <TextNameProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/signin" element={<SigninForm />} />
          <Route path="/userdashboard" element={<UserHomePage />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </TextNameProvider>
  );
}

export default App;
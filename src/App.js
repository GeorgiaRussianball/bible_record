import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Records from './components/pages/Records';
import SignUp from './components/pages/SignUp';
import Record0 from './components/pages/Record0';
import Record1 from './components/pages/Record1';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/records' element={<Records/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/records/0' element={<Record0/>} />
          <Route path='/records/1' element={<Record1/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

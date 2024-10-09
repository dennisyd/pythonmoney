// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Money from './pages/Money';
import Education from './pages/Education';
import About from './pages/About';
import Contact from './pages/Contact';
import Forum from './pages/Forum';
import Random from './pages/Random';
import MMMClassics from './components/PMClassics';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/money" element={<Money />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/random" element={<Random />} />
        <Route path="/classics" element={<MMMClassics />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
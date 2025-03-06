import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Department from './pages/Department';
import Courses from './pages/Courses';
import Admission from './pages/Admission';
import ContactUs from './pages/Contact';
import Apply from './pages/Apply';
import Academics from './pages/Academics';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Media from './pages/Media';
import NIRF from './pages/NIRF';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/department" element={<Department />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/media" element={<Media />} />
        <Route path="/nirf" element={<NIRF />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;

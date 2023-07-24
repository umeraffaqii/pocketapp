import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Menu/Navbar/Navbar';
import Home from './Component/Container/Home/Home';
import Footer from './Component/Menu/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Component/Container/About/About';
import '../src/App.css'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

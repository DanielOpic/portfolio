import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/Web/About/About';
import Experience from './pages/Web/Experience/Experience';
import Portfolio from './pages/Web/Portfolio/Portfolio';
import Login from './pages/Cms/Login/Login';
import './App.scss';


const App = () => {
  return (
      <Router>
          <Header />
          <div>
              <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/login" element={<Login />} />
              </Routes>
          </div>
      </Router>
  );
};

export default App;

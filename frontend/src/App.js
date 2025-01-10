import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/Web/About/About';
import Experience from './pages/Web/Experience/Experience';
import Portfolio from './pages/Web/Portfolio/Portfolio';
import Login from './pages/Cms/Login/Login';
import Dashboard from './pages/Cms/Dashboard/Dashboard';
import CmsPortfolio from './pages/Cms/Portfolio/Portfolio';

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
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/cms/Portfolio" element={<CmsPortfolio />} />
              </Routes>
          </div>
      </Router>
  );
};

export default App;

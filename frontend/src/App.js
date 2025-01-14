import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/Web/About/About';
import Experience from './pages/Web/Experience/Experience';
import Portfolio from './pages/Web/Portfolio/Portfolio';
import Login from './pages/Cms/Login/Login';
import Dashboard from './pages/Cms/Dashboard/Dashboard';
import CmsPortfolio from './pages/Cms/Portfolio/Portfolio';

// Importowanie AuthContext i AuthProvider
import { AuthProvider, useAuth } from './context/AuthContext'; 

// Importowanie globalnych stylów
import './App.scss';

// Komponent ochrony tras, sprawdzający, czy użytkownik jest zalogowany
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth(); // Sprawdzamy, czy użytkownik jest zalogowany
  
  // Jeśli nie jest zalogowany, przekierowujemy do strony logowania
  return isLoggedIn ? children : <Navigate to="/login" />;
};

// Komponent ochrony tras dla niezalogowanych użytkowników (trasa logowania)
const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth(); // Sprawdzamy, czy użytkownik jest zalogowany
  
  // Jeśli jest zalogowany, przekierowujemy na stronę główną lub dashboard
  return !isLoggedIn ? children : <Navigate to="/dashboard" />;
};

const App = () => {
  
  const [showNav, setShowNav] = useState(false);
  const toggleNavVisibility = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <AuthProvider> 
      <Router>
          <div className="main">
          <div className="navboxbtn" onClick={toggleNavVisibility}></div>
            <div className={`navbox box ${showNav ? 'open' : ''}`}>
                <Header />
            </div>
            <div className="mainbox box">
            <Routes>
              {/* Publiczne trasy */}
              <Route path="/" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/portfolio" element={<Portfolio />} />
              
              {/* Trasa logowania - dostępna tylko dla niezalogowanych */}
              <Route 
                path="/login" 
                element={
                  <PublicRoute>
                    <Login /> {/* Dostępne tylko dla niezalogowanych */}
                  </PublicRoute>
                } 
              />

              
              {/* Ochrona trasy Dashboard - tylko dla zalogowanych */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard /> {/* Tylko zalogowani użytkownicy będą mieli dostęp */}
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/cms/Portfolio" 
                element={
                  <ProtectedRoute>
                    <CmsPortfolio /> {/* Tylko zalogowani użytkownicy będą mieli dostęp */}
                  </ProtectedRoute>
                } 
              />

            </Routes>
            </div>
          </div>
      </Router>
    </AuthProvider> 
  );
};

export default App;

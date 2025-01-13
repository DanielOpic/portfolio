import React, { createContext, useState, useContext } from 'react';

// Tworzymy kontekst dla logowania
const AuthContext = createContext();

// Komponent, który dostarcza stan logowania w całej aplikacji
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Prosty stan logowania (boolean)

  // Funkcja do logowania użytkownika
  const login = () => {
    setIsLoggedIn(true);
    // W przyszłości można tu dodać logikę logowania z backendem
  };

  // Funkcja do wylogowania użytkownika
  const logout = () => {
    setIsLoggedIn(false);
    // Możemy dodać logikę wylogowania z backendem
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook, który umożliwia dostęp do stanu logowania
export const useAuth = () => useContext(AuthContext);

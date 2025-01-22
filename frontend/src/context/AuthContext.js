import React, { createContext, useState, useContext, useEffect } from 'react';
import { API_BASE_URL } from '../config/api'; // Zaimportowanie adresu API

// Tworzymy kontekst dla logowania
const AuthContext = createContext();

// Komponent, który dostarcza stan logowania w całej aplikacji
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Początkowy stan logowania
  const [loading, setLoading] = useState(true); // Flaga ładowania, aby nie renderować przed sprawdzeniem statusu

  // Funkcja do logowania użytkownika
  const login = async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, { // Zmienimy URL, aby odpowiadał Twojemu API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem('token', data.token); // Zapisujemy token w localStorage
        setIsLoggedIn(true); // Zmieniamy stan logowania
      } else {
        console.log('Login failed:', data.message);
        setIsLoggedIn(false); // Jeśli nie ma tokenu, nie jest zalogowany
      }
    } catch (error) {
      console.error('Login error:', error);
      setIsLoggedIn(false);
    }
  };

  // Funkcja do wylogowania użytkownika
  const logout = async () => {
    
    localStorage.removeItem('token'); // Usuwamy token z localStorage
    setIsLoggedIn(false); // Zmieniamy stan logowania

    try {
      const response = await fetch(`${API_BASE_URL}/logout`, { // Zmienimy URL, aby odpowiadał Twojemu API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });

      const data = await response.json();
      console.log('Login:', data.message);
    } catch (error) {
      console.error('Logout error:', error);
      setIsLoggedIn(false);
    }
    
  };

  // Sprawdzamy status logowania przy starcie aplikacji (na podstawie tokenu w localStorage)
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem('token'); // Pobieramy token z localStorage
      if (token) {
        try {
          const response = await fetch(`${API_BASE_URL}/check-login`, { // Endpoint do sprawdzania statusu logowania
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          const data = await response.json();
          setIsLoggedIn(data.isAuthenticated); // Jeśli odpowiedź z backendu mówi, że użytkownik jest zalogowany, zmieniamy stan
        } catch (error) {
          setIsLoggedIn(false); // Jeśli wystąpił błąd, traktujemy to jako brak logowania
        }
      } else {
        setIsLoggedIn(false); // Jeśli nie ma tokenu, użytkownik nie jest zalogowany
      }
      setLoading(false); // Po sprawdzeniu logowania kończymy ładowanie
    };

    checkAuthStatus();
  }, []);

  // Jeśli aplikacja jeszcze nie skończyła sprawdzania statusu logowania, wyświetlamy loader
  if (loading) {
    return <div>Loading...</div>; // Możesz tu umieścić loader
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook, który umożliwia dostęp do stanu logowania
export const useAuth = () => useContext(AuthContext);

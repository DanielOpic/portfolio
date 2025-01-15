import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import './Login.scss';
import { useAuth } from '../../../context/AuthContext'; // Importujemy useAuth, aby uzyskać funkcję login
import { hashPassword } from '../../../utils/common'; // Importujemy funkcję z utils/common

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const { login } = useAuth(); // Pobieramy funkcję login z kontekstu

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { username, password } = formData;
    
    try {
      // Haszowanie hasła przed wysłaniem
      const hashedPassword = await hashPassword(password);
  
      // Teraz możesz wysłać hashedPassword do backendu
      const credentials = {
        username: username,
        password: hashedPassword,  // Wysyłamy haszowane hasło
      };
      
      login(credentials);
  
    } catch (error) {
      console.error("Error hashing password:", error);
    }
  };
  

  return (
    <div className="login-container">
      <h2>Logowanie <span>do CMS</span></h2>
      <form className="login-form" onSubmit={handleSubmit}> {/* Dodajemy obsługę submit */}
        <div className="input-group">
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Login"
          />
        </div>
        <div className="input-group password-group">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Hasło"
          />
          <FontAwesomeIcon
            icon={showPassword ? faLockOpen : faLock}
            onClick={togglePasswordVisibility}
            className="password-icon"
          />
        </div>
        <button type="submit" className="btn">
          Zaloguj się
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

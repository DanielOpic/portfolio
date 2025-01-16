import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importujemy kontekst
import './Header.scss';

const Header = () => {
  const { isLoggedIn, logout } = useAuth(); // Pobieramy informację o logowaniu oraz funkcję logout

  return (
    <header>
      <nav>
        <img src="/img/profilowe.jpg" alt="Moje zdjęcie" className="my__image" />
        <ul>
          <li><Link className="btn" to="/">O mnie</Link></li>
          <li><Link className="btn" to="/experience">Doświadczenie</Link></li>
          <li><Link className="btn" to="/portfolio">Portfolio</Link></li>

          {/* Wyświetlamy link do logowania, jeśli użytkownik nie jest zalogowany */}
          {!isLoggedIn && <li><Link className="btn" to="/login">Logowanie</Link></li>}

          {/* Wyświetlamy linki do Dashboard i Portfolio tylko, jeśli użytkownik jest zalogowany */}
          {isLoggedIn && (
            <>
              <h4>CMS</h4>
              <li><Link className="btn" to="/dashboard">Dashboard</Link></li>
              <li><Link className="btn" to="/cms/Expirience">Doświadczenie</Link></li>
              <li><Link className="btn" to="/cms/Portfolio">Portfolio</Link></li>
              <li><button className="btn" onClick={logout}>Wyloguj</button></li> {/* Przycisk wylogowania */}
            </>
          )}
        </ul>
        <img src="/img/qr.png" alt="LinkedIn" className="linkedin__image" />
      </nav>
    </header>
  );
};

export default Header;

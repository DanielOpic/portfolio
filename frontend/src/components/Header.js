import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">O mnie</Link></li>
                    <li><Link to="/experience">Doświadczenie</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/login">Logowanie</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

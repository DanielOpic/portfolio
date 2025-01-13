import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link className="btn" to="/">O mnie</Link></li>
                    <li><Link className="btn" to="/experience">Doświadczenie</Link></li>
                    <li><Link className="btn" to="/portfolio">Portfolio</Link></li>
                    <li><Link className="btn" to="/login">Logowanie</Link></li>
                    <li><Link className="btn" to="/dashboard">Dashboard</Link></li>
                    <li><Link className="btn" to="/cms/Portfolio">Portfolio</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

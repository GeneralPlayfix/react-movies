import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <NavLink to="/" className={(nav) => nav.isActive ? "nav-active" : ""}>
                        <li>Accueil</li>
                    </NavLink>
                    {/* dans className il y une ternaire pour vérifier si la route est active  */}
                    <NavLink to="/coup-de-coeur" className={(nav) => nav.isActive ? "nav-active" : ""}>
                        <li>Coup de coeur</li>
                    </NavLink>
                </ul>
            </nav>
            <h1>React Movies</h1>
        </div>
    );
};

export default Header;
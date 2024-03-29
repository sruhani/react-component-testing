import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Startseite</Link></li>
                <li><Link to="/about">Über Uns</Link></li>
                <li><Link to="/contact">Kontakt</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;
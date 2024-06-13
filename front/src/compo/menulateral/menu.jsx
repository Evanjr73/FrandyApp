import './menu.module.css'
import React, { useState } from 'react';
import '../../pages/Perfil/globalstyles.css';
import '../../pages/Perfil/PerfilPrivado/PerfilPrivado.module.css'

import menu from "../../assets/img/menu.png";

function MenuLateral() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };




    return (
        <div >
            <button onClick={toggleMenu} className="menu-toggle">
                <img src={menu} alt="Menu" />
            </button>
            <nav className={`lateral-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#settings">Settings</a></li>
                    <li><a href="#logout">Logout</a></li>
                </ul>
            </nav>

        </div>
    )
}



export default MenuLateral
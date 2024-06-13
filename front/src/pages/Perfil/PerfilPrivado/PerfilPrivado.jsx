import React, { useState } from 'react';
import FotoPerfil from "../../../assets/img/perfil.png";
import editor from '../img/editar.png';
import '../globalstyles.css';
import './PerfilPrivado.module.css'
import Chat from "../../../assets/img/chat.png";
import menu from "../../../assets/img/menu.png";
import FotoPapelParede from "../../../assets/img/praia.png";
import FotoPerfilnome from "../../../assets/img/foto.png";
import Footer from '../../../compo/Footer';
import MenuLateral from '../../../compo/menulateral/menu';

function PerfilPrivado() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="container">
            <header>
            <MenuLateral></MenuLateral>
                <img src={FotoPapelParede} alt="" className='Papel-de-Parede' />
                <div className='PerfilFoto'>
                    <img src={FotoPerfilnome} alt="" className='FotoPerfilnome' />
                    <img src={editor} className="editor" alt="" />
                </div>
            </header>
            <div className='bio'>
                <div className="name">
                    <h2>Evan</h2>
                </div>
                <div className="bio-text">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor labore minus modi explicabo fugit vitae asperiores natus. Deserunt distinctio quia eaque dolore accusamus recusandae voluptate placeat vero, quasi voluptatibus consequuntur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga inventore sapiente corporis adipisci id illo, aperiam officiis quam corrupti repudiandae praesentium, veniam excepturi possimus quaerat facere et natus vel quia?</p>
                </div>
            </div>
            <div className='separador'></div>
            <div className='grid-img'>
                <ul>
                    <li><img src={FotoPerfilnome} className='grid-img-item' alt="" /></li>
                    <li><img src={FotoPerfilnome} className='grid-img-item' alt="" /></li>
                    <li><img src={FotoPerfilnome} className='grid-img-item' alt="" /></li>
                    <li><img src={FotoPerfilnome} className='grid-img-item' alt="" /></li>
                    <li><img src={FotoPerfilnome} className='grid-img-item' alt="" /></li>
                    <li><img src={FotoPerfilnome} className='grid-img-item' alt="" /></li> <li><img src={FotoPerfilnome} className='grid-img-item' alt="" /></li>
                    <li><img src={FotoPerfilnome} className='grid-img-item' alt="" /></li>
                    <li><img src={FotoPerfilnome} className='grid-img-item' alt="" /></li>
                    
                </ul>
            </div>
            <div className='separador'></div>
            <div className='separador'></div>
            <Footer />
        </div>
    );
}

export default PerfilPrivado;

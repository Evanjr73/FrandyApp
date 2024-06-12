import "../pages/home/Home.css"

import Chat from "../assets/img/chat.png"
import Perfil from "../assets/img/perfil.png"

function Footer() {



    return (
        <footer className="footer-footer">
            <a href="">
                <button className="button-footer"></button>
            </a>

            <a href="">
                <button className="button-footer">
                    <img className="footerImg" src={Chat} alt="Chat" />
                </button>
            </a>

            <a href="">
                <button className="button-footer">
                    <img className="footerImg" src={Perfil} alt="" />
                </button>
            </a>
        </footer>

    )
}


export default Footer
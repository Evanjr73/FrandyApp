import "../pages/home/Home.css"

import Chat from "../assets/img/chat.png"
import Perfil from "../assets/img/perfil.png"

function Footer() {



    return (
        <footer>
            <a href="">
                <button></button>
            </a>

            <a href="">
                <button>
                    <img className="footerImg" src={Chat} alt="Chat" />
                </button>
            </a>

            <a href="">
                <button>
                    <img className="footerImg" src={Perfil} alt="" />
                </button>
            </a>
        </footer>

    )
}


export default Footer
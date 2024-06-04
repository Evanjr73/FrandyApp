
import Feed from "./compents/feed"
import "./Home.css"
import Chat from "../../assets/img/chat.png"
import Perfil from "../../assets/img/perfil.png"
import Card from "./compents/Card"

function Home() {
    return (
        <div className="home">


            <div className="componet">
                <Card></Card>
            </div>

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

        </div>
    )
}

export default Home
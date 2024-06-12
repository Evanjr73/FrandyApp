import "../pages/home/Home.css"

import Chat from "../assets/img/chat.png"
import setaDireita from "../assets/img/seta-direita.png"
import './footer.css'
function FooterCad() {



    return (
        <footer className="footer-cadastro">
            

            <a href="">
                <button className="button-footer">
                    <img className="footerImg" src={setaDireita} alt="" />
                </button>
            </a>
        </footer>

    )
}


export default FooterCad
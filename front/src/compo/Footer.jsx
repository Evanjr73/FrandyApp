import style from './footer.module.css'
import Chat from "../assets/img/chat.png"
import Perfil from "../assets/img/perfil.png"

function Footer() {



    return (
        <footer className={style.foote}>
            <a href="">
                <button className={style.buttonFooter}></button>
            </a>

            <a href="">
                <button className={style.buttonFooter}>
                    <img className={style.footerImg} src={Chat} alt="Chat" />
                </button>
            </a>

            <a href="">
                <button className={style.buttonFooter}>
                    <img className={style.footerImg} src={Perfil} alt="" />
                </button>
            </a>
        </footer>

    )
}


export default Footer
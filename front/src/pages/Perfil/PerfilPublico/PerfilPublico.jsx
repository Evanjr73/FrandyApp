

import '../globalstyles.css'
import './PerfilPublico.css'
import menu from "../../../assets/img/menu.png"
import Chat from "../../../assets/img/chat.png"
import FotoPapelParede from "../../../assets/img/praia.png"
import FotoPerfilnome from "../../../assets/img/foto.png"
import Footer from '../../../compo/Footer'

function PerfilPublico (){
    


    return(
        <div className="container"> 

            <header>
                <nav>
                    <img src={menu} alt="" />
                </nav>
                <img src={FotoPapelParede} alt=""  className='Papel-de-parede'/>
                <div className='PerfilFoto'>
                        <img src={FotoPerfilnome} alt="" className='FotoPerfilnome' />

                </div>
                
            </header>

            <div className='bio'>
                <h2>Evan junior</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Dolor labore minus modi explicabo fugit vitae 
                    asperiores natus. Deserunt distinctio quia eaque dol
                    orem accusamus recusandae voluptate placeat vero, qu
                    asi voluptatibus consequuntur! Lorem ipsum dolor, sit
                     amet consectetur adipisicing elit. Fuga inventore sapient
                     e corporis adipisci id illo, aperiam officiis quam corrup
                     i repudiandae praesentium, veniam excepturi possimus quaera
                     t facere et natus vel quia?</p>
                


            </div>

            <div className='separador'></div>

            <div className='grid-img'>
                <ul>
                    <li><img src={FotoPerfilnome} className='grid-img' alt="" /></li>
                    <li><img src={FotoPerfilnome} className='grid-img' alt="" /></li>
                    <li><img src={FotoPerfilnome} className='grid-img' alt="" /></li>
                    <li><img src={FotoPerfilnome} className='grid-img' alt="" /></li>
                    <li><img src={FotoPerfilnome} className='grid-img' alt="" /></li>
                    <li><img src={FotoPerfilnome} className='grid-img' alt="" /></li>
                    <li><img src={FotoPerfilnome} className='grid-img' alt="" /></li>
                    <li><img src={FotoPerfilnome} className='grid-img' alt="" /></li>
                    <li><img src={FotoPerfilnome} className='grid-img' alt="" /></li>
                </ul>
            </div>
            <footer><Footer></Footer></footer>
            
        </div>
    )
}


export default PerfilPublico
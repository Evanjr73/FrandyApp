

import '../globalstyles.css'
import './PerfilPublico.css'
import FotoPapelParede from "../../../assets/img/praia.png"
import FotoPerfilnome from "../../../assets/img/foto.png"

function PerfilPublico (){
    


    return(
        <div className="container"> 

            <header>
                <img src={FotoPapelParede} alt=""  className='Papel-de-parede'/>
                <div className='PerfilFoto'>
                        <img src={FotoPerfilnome} alt="" className='FotoPerfilnome' />

                </div>
                
            </header>

        </div>
    )
}


export default PerfilPublico
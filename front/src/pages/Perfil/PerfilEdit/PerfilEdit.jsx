

import editor from '../img/editar.png'
import '../globalstyles.css'
import './PerfilEdit.css'
import '../PerfilPublico/PerfilPublico.css'
import Footer from '../../../compo/Footer'
import menu from "../../../assets/img/menu.png"
import FotoPapelParede from "../../../assets/img/praia.png"
import FotoPerfilnome from "../../../assets/img/foto.png"




function PerfilEdit() {



    return (
        <div className="container">
            <header>
                <nav>
                    <img src={menu} alt="" />
                </nav>
                <img src={FotoPapelParede} alt="" className='Papel-de-parede' />
                <div className='PerfilFoto'>
                    <img src={FotoPerfilnome} alt="" className='FotoPerfilnome' />
                    <img src={editor} className="editor" alt="" />

                </div>

            </header>

            <div className='input-Edit'>
                <div className='formularioedit'>
                    <p>NOME</p>
                    <input type="text" placeholder="Digite seu nome" label='email' className='dadosinput' />
                </div>
                <div className='formularioedit'>
                    <p>NOME</p>
                    <input type="text" placeholder="Digite seu nome" label='email' className='dadosinput' />
                </div>
                <div className='formularioedit'>
                    <p>NOME</p>
                    <input type="text" placeholder="Digite seu nome" label='email' className='dadosinput' />
                </div>


                <div className='formularioedit-bio'>
                    <p>BIO</p>
                    <input type="text" className='bioinput' />
                </div>



            </div>

            <div className='fotos-edit'>
                <div className='titulo-edit'>
                    <h2>EDITAR FOTOS</h2>
                </div>
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


            </div>


            <Footer></Footer>
        </div>
    )
}


export default PerfilEdit
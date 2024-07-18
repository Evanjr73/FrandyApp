import editor from '../../../assets/img/editar.png'
import FotoPerfilnome from "../../../assets/img/foto.png"
import style from  './Page.module.css'

function Cadastro1() {
    return (
        <div className="container">


            <div className={style.PerfilFotopage1}>
                <img src={FotoPerfilnome} alt="" className='FotoPerfilnome' />
                <img src={editor} className= {style.editor} alt="" />

            </div>


            <div className='input-Edit-page1'>
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


        </div>
    )
}


export default Cadastro1
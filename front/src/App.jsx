import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import PerfilPublico from './pages/Perfil/PerfilPublico/PerfilPublico'
import PerfilPrivado from './pages/Perfil/PerfilPrivado/PerfilPrivado'
import PerfilEdit from './pages/Perfil/PerfilEdit/PerfilEdit'
import Cadastro1 from './pages/cadatro/page1/Page'
import Page2 from './pages/cadatro/page2/Page'

import './App.css'

function App() {


  return (

    <div className='App'>
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/perfil" element={<PerfilPublico />} />
          <Route path="/perfil/Privado" element={<PerfilPrivado />} />
          <Route path="/perfil/Edit" element={<PerfilEdit/>} />
          <Route path="/perfil/cadastro" element={<Cadastro1/>} />
          <Route path="/perfil/cadastro/2" element={<Page2/>} />

        </Routes>
      </Router>

    </div>

  )
}

export default App

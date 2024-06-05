import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import PerfilPublico from './pages/Perfil/PerfilPublico/PerfilPublico'
import PerfilPrivado from './pages/Perfil/PerfilPrivado/PerfilPrivado'
import PerfilEdit from './pages/Perfil/PerfilEdit/PerfilEdit'

import './App.css'

function App() {


  return (

    <div className='App'>
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/perfil" element={<PerfilPublico />} />
          <Route path="/perfilPrivado" element={<PerfilPrivado />} />

        </Routes>
      </Router>

    </div>

  )
}

export default App

import './App.css'

import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from  './assets/components/layout/Header'
import Container from './assets/components/layout/Container'
import Home from './assets/components/pages/Home'
import Sobre from './assets/components/pages/Sobre'
import Instrumentos from './assets/components/pages/Instrumentos'
import Enderecos from './assets/components/pages/Enderecos'
import Footer from './assets/components/layout/Footer'

function App() {

  return (
    <Router>
      <Header />
      <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/instrumentos" element={<Instrumentos />} />
            <Route path="/enderecos" element={<Enderecos />} />
          </Routes>


      </Container>
      <Footer />
    </Router>
    
  )
}

export default App

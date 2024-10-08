import './App.css'

import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'

import Header from './assets/components/layout/Header'
import Home from './assets/components/pages/Home'
import Escocia from './assets/components/pages/Escocia'
import GrandCanyon from './assets/components/pages/GrandCanyon'
import Aruba from './assets/components/pages/Aruba'
import MuralhasDaChina from './assets/components/pages/MuralhasDaChina'
import Footer from './assets/components/layout/Footer'

function App() {
  

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path ='/' element={<Home />}/>
          <Route path ='/escocia' element={<Escocia />}/>
          <Route path ='/grandcanyon' element={<GrandCanyon />}/>
          <Route path ='/aruba' element={<Aruba />}/>
          <Route path ='/muralhasdachina' element={<MuralhasDaChina />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Company from './components/Pages/Company.js';
import Contact from './components/Pages/Contact';
import NewProject from './components/Pages/NewProject.js';
import About from './components/Pages/About.js';
import Navbar from './components/layout/Navbar.js';
import Footer from './components/layout/Footer.js';

function App() {
  return (
    <Router>
      <Navbar />


      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newProject" element={<NewProject />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>

  );
}

export default App;

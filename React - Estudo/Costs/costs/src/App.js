import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar.js';
import Home from './components/Pages/Home';
import Company from './components/Pages/Company.js';
import Contact from './components/Pages/Contact';
import Projects from './components/Pages/Projects.js';
import NewProject from './components/Pages/NewProject.js';
import About from './components/Pages/About.js';
import Project from './components/Pages/Project.js'
import Footer from './components/layout/Footer.js';

import Container from './components/layout/Container.js';

function App() {
  /*
    -> Criamos o arquivo "db.json" na raíz do projeto para simularmos um banco de dados, lá vamos criar nossas tabelas
    -> Criamos lá no arquivo da pasta raiz do projeto, "packge.json", isso daqui: "backend":"json-server --watch db.json --port 5000", para conseguirmos trabalhar com a simulação do banco de dados "db.json". 
    -> --watch db.json significa que ele ficará monitorando este arquivo para eventuais mudanças e ele rodará na porta 5000
    -> Precisamos voltar algumas versões do json-serve, pois tive um problema de compatibilidade:
    npm install json-server@0.16.3
    -> Após isso, para testar o funcionamento abrimos um novo terminal (crtl + j) e rodamos o novo npm (script) criado por nós: "npm run backend"
    -> E pronto, agora podemos acessar o nosso banco de dados, acessando a rota  "http://localhost:5000/projects"
  */

  return (
    <Router>
      <Navbar />
      
      <Container customClass="min-height">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/newProject" element={<NewProject />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/:id" element={<Project />} />
          
        </Routes>
      </Container>

      <Footer />
    </Router>

  );
}

export default App;

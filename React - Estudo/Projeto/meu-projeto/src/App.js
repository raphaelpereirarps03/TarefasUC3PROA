import './App.css';
<<<<<<< Updated upstream
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Fragment  from './components/Fragment';

function App() {

  const name = "Josefa";
=======
// import HelloWorld from './components/HelloWorld';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import Fragment  from './components/Fragment';
// import Lista2 from './components/Lista2';
// import Evento from './components/Evento'
// import Form from './components/Form';
// import Condicional from './components/Condicional';
// import OutraLista from './components/outraLista';
// import {useState} from 'react'
// import SeuNome from './components/SeuNome'
// import Saudacao from './components/Saudacao';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';



function App() {


  // const [nome, setNome] = useState() 

  // const meusItens = ['React', 'Vue', 'Angular',  'Flutter', 'Dart'];


  /*
    -> JSX é como um html, porém,  ele é interpretado pelo browser como javascript;
>>>>>>> Stashed changes

  function sum (a,b) {
    return  a + b;
  }

  const url =  "https://www.google.com";

<<<<<<< Updated upstream
  const nome = "Josefa"
  return (
    <div className="App">
      <h1> Olá mundo! Olá {name}! </h1>
      <p> Este é um exemplo de aplicação React </p>
      <HelloWorld />
      <SayMyName nome={name} />
      <Pessoa 
      nome="Rodrigo" 
      idade="25" 
      profissao= "Programador"
      foto="https://via.placeholder.com/150" />
=======
    -> É possível também executar funções em JSX;

    ->  JSX é uma sintaxe de xml, porém, não é xml, pois, não é uma  linguagem de marcação, e sim uma sintaxe de expressões;
    
    -> Inserir valores em atributos tags também é válido em JSX.



    ------------------- Routes  -------------------
    -> Routes é uma tag que define as rotas da aplicação;

    -> O react Router é um pacote para mudança de URLs da aplicação;

    **** import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' ****

    **** AS ROTAS PRECISAM ESTAR DENTRO DO RETURN ****

    **** AS PÁGINAS QUE SERÃO USADAS PRECISAM SER IMPORTADAS ****

    -> Podemos assim acessar outras view, sem o page reload;
    
    -> Trocando apenas uma parte do layout da aplicação, ou seja, o que muda de view para view;

    -> Precisamos instalar este pacote no projeto; **** npm install react-router-dom *****

    -> E também realizar algumas mudanças em como o App é estruturado;


    
    ********** OBS: e o componente Switch não está mais disponível na versão mais recente do react-router-dom. A partir da versão 6 do react-router-dom, o Switch foi substituído por Routes. Aqui está como você pode corrigir seu código:

    Alterando Switch para Routes
    Importe Routes: Troque a importação de Switch para Routes no seu arquivo App.js.

    Substitua Switch por Routes: Em vez de usar Switch para agrupar suas rotas, você deve usar Routes. **********


  */

  // const name = "Josefa";

  // function sum (a,b) {
  //   return  a + b;
  // }

  // const url =  "https://www.google.com";

  // const nome = "Josefa"
  return (
    // <div className="App">

    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
>>>>>>> Stashed changes

        <Route path="/empresa" element={<Empresa />} />

<<<<<<< Updated upstream
      <p> Soma = {sum(2, 8)} </p>
      <img src = {url} alt="Meu link" />
    </div>
=======
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />

    </Router>

    /*<h1> State Lift  </h1>
     <SeuNome setNome={setNome} />
    <Saudacao nome={nome} /> */


    /* <OutraLista itens={meusItens} />
    <OutraLista itens={[]} /> */


    /* <Condicional /> */
    /* <Evento /> */
    /* <Evento numero="1"/>
      <Form /> */



    /* <h1> Olá mundo! Olá {name}! </h1>
    <Lista2 />
    <p> Este é um exemplo de aplicação React </p>
    <HelloWorld />
    <SayMyName nome={nome} />
    <Pessoa 
    nome="Rodrigo" 
    idade="25" 
    profissao= "Programador"
    foto="https://via.placeholder.com/150" />

    <Fragment />
    

    <p> Soma = {sum(2, 8)} </p>
    <img src = {url} alt="Meu link" /> */


    // </div>
>>>>>>> Stashed changes
  );
}

export default App;

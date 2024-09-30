import './App.css';
// import HelloWorld from './components/HelloWorld';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import Fragment  from './components/Fragment';
// import Lista2 from './components/Lista2';
// import Evento from './components/Evento'
// import Form from './components/Form';
import Condicional from './components/Condicional';
function App() {

  /*
    -> JSX é como um html, porém,  ele é interpretado pelo browser como javascript;

    -> É a principal maneira de se escrever html com react;

    -> Podemos interpolar variáveis, inserindo ela entre {};

    -> É possível também executar funções em JSX;

    ->  JSX é uma sintaxe de xml, porém, não é xml, pois, não é uma  linguagem de marcação, e sim uma sintaxe de expressões;
    
    -> Inserir valores em atributos tags também é válido em JSX.

  */

  // const name = "Josefa";

  // function sum (a,b) {
  //   return  a + b;
  // }

  // const url =  "https://www.google.com";

  // const nome = "Josefa"
  return (
    <div className="App">

      <h1> Renderização condicional </h1>
      <Condicional />
        {/* <Evento /> */}
        {/* <Evento numero="1"/>
        <Form /> */}
        
      

      {/* <h1> Olá mundo! Olá {name}! </h1>
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
      <img src = {url} alt="Meu link" /> */}


    </div>
  );
}

export default App;

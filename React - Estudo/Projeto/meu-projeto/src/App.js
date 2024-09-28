import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
function App() {

  const name = "Josefa";

  function sum (a,b) {
    return  a + b;
  }

  const url =  "https://www.google.com";

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
      

      <p> Soma = {sum(2, 8)} </p>
      <img src = {url} alt="Meu link" />
    </div>
  );
}

export default App;

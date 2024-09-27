
import './App.css';

function App() {

  const name = "Raphael";

  function sum (a,b) {
    return  a + b;
  }

  const url =  "https://www.google.com";


  return (
    <div className="App">
      <h1> Olá mundo! Olá {name}! </h1>
      <p> Este é um exemplo de aplicação React </p>

      <p> Soma = {sum(2, 8)} </p>
      <img src = {url} alt="Meu link" />
    </div>
  );
}

export default App;

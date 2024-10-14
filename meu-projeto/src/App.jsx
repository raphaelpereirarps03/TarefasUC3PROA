import Header from './components/Header.jsx'
import Meio from './components/Meio.jsx'
import Footer from './components/Footer.jsx'
import guitarra from './assets/imgs/guitarrinha.jpg'


import './App.css'
function App() {
  let nome = "Raphael"
  let idade = 21

  return (
    <>
      <h1>Olá mundo!</h1>
      <img src={guitarra} alt="guitarra" />
      {nome} = {typeof(nome)}
      <br />
      {idade} = {typeof(idade)}
    </>
  )
}

export default App

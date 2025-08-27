import 'bootstrap/dist/css/bootstrap.min.css';
import ImputPelis from './Components/ImputCompon';
import NavbarPelis from './Components/NavbarPelis';
import './App.css'
import FooterPrecentacion from './Components/FooterPrecentacion';


function App() {

  return (
    <>
      <NavbarPelis />
      <main>
        <ImputPelis />
      </main>
      <FooterPrecentacion />
    </>
  )
}

export default App

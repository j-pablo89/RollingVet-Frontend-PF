import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
import PaginaPrincipal from './components/views/PaginaPrincipal';

function App() {
  return (
    <>
      <Menu></Menu>
      <PaginaPrincipal></PaginaPrincipal>
      <Footer></Footer>
    </>
  )
}

export default App

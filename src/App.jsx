import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
import PaginaPrincipal from './components/views/PaginaPrincipal';
import Error404 from './components/views/Error404';
import Contacto from './components/views/Contacto';
import Login from './components/views/Login';
import Administrador from './components/views/Administrador';

function App() {
  return (
    <>
      <Menu></Menu>
      {/* <PaginaPrincipal></PaginaPrincipal> */}
      {/* <Error404></Error404> */}
      {/* <Contacto></Contacto> */}
      {/* <Login></Login> */}
      <Administrador></Administrador>
      <Footer></Footer>
    </>
  )
}

export default App

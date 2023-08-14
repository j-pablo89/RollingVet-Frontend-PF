import { Nav, Navbar, Container, Image, NavDropdown } from "react-bootstrap";

function BasicExample() {
  return (
    <Navbar expand="lg" variant="dark" bg="danger">
      <Container>
        <Navbar.Brand href="#home"><Image src="/src/assets/LAHUELLA.png" rounded /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#home">Acerca de Nosotros</Nav.Link>
            <NavDropdown title="Administrar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Pacientes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Turnos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
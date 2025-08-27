import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarPelis = () => {
  return (
    <Navbar expand="lg" className="" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Altas De peliculasHD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button href="https://github.com/Maxii34/Altas-de-peliculas" target="_blank" variant="dark">Repositorio</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPelis;

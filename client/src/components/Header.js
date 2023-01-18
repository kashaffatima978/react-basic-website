
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header=()=>{
  return(
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Services</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">View</Nav.Link>
            <Nav.Link href="/addservices">Add</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  );
}

export default Header;
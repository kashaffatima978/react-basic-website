import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
      <Navbar expand="lg" bg="dark" variant="dark" fixed='bottom'>
      <Container>
        <Navbar.Brand href="/">Footer</Navbar.Brand>
      </Container>
    </Navbar>
    );
  }
  
  export default Footer;
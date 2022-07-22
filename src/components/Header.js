import { Navbar, Nav, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">New Question</Nav.Link>
        <Nav.Link href="#pricing">Leader Board</Nav.Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
          <Navbar.Text id="user-introduction">
            Hello, Van Khanh Bui
          </Navbar.Text>
          <Button variant="secondary">Logout</Button>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header;
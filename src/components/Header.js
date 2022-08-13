import { Navbar, Nav, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { authUser } = useSelector((state) => state.users);

  return (
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link active>
            <Link className='link' to={"/"}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className='link' to={"/add"}>
              New Question
            </Link>
          </Nav.Link>
          <Nav.Link className='active'>
            <Link className='link' to={"/leaderboard"}>Leader Board</Link>
          </Nav.Link>
        </Nav>
        {authUser ? (
          <Navbar.Collapse className='justify-content-end'>
            <div>
              <img
                className='avatar-auth-user me-2'
                src={authUser.avatarURL}
                alt='avatar'
              />
              <Navbar.Text
                id='user-introduction'
                className='text-white fw-bold'>
                Hello, {authUser.name}
              </Navbar.Text>
            </div>
            <Button variant='secondary'>Logout</Button>
          </Navbar.Collapse>
        ) : (
          ""
        )}
      </Container>
    </Navbar>
  );
};

export default Header;

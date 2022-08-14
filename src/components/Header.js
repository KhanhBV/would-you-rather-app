import { Navbar, Nav, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../redux/actions/users";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkActiveLink = (isActive) => {
    return isActive ? "active-link" : "";
  };

  let activeClassName = "underline";
  const { authUser } = useSelector((state) => state.users);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Navbar bg='info' variant='dark'>
      <Container>
        <Nav className='me-auto nav-link-container link'>
          <NavLink
            className={({ isActive }) => checkActiveLink(isActive)}
            to={"/"}>
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => checkActiveLink(isActive)}
            to={"/add"}>
            New Question
          </NavLink>
          <NavLink
            className={({ isActive }) => checkActiveLink(isActive)}
            to={"/leaderboard"}>
            Leader Board
          </NavLink>
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
            <Button variant='secondary' onClick={() => handleLogout()}>
              Logout
            </Button>
          </Navbar.Collapse>
        ) : (
          ""
        )}
      </Container>
    </Navbar>
  );
};

export default Header;

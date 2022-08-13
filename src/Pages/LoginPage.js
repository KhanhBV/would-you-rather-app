import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { getUsers, login } from "../redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userId, setUserId] = useState(null);

  const { userArr } = useSelector((state) => state.users);

  const loadUsers = () => {
    dispatch(getUsers());
  };

  const handleSelectUser = (e) => {
    setUserId(e.target.value);
  };

  const handleLogin = () => {
    dispatch(login(userId));
    navigate("/", { replace: true });
  };

  const renderDropdownItem = () => {
    return userArr.map((user) => (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    ));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className='d-flex justify-content-center mt-4'>
      <Card className='col-3 ps-3 pe-3'>
        <Card.Header className='fw-bold fs-6 text-center'>
          Welcome to the Would You Rather App
        </Card.Header>
        <Card.Header className='text-center'>
          Please sign in to continue
        </Card.Header>
        <Card.Img variant='top' src={require("../images/react-icon.png")} />
        <Card.Body className='text-center'>
          <Card.Title>Sign in</Card.Title>
          <select
            className='form-select'
            onChange={(item) => handleSelectUser(item)}
            defaultValue={"default"}
            aria-label='Default select'>
            <option value={"default"} disabled>
              Select User
            </option>
            {userArr.length > 0 && renderDropdownItem()}
          </select>
          <button
            type='button'
            className='btn btn-primary mt-3 col-12'
            variant='primary'
            onClick={() => handleLogin()}>
            Sign In
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;

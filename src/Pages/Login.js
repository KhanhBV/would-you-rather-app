import { Button, Card } from "react-bootstrap";

const Login = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <Card className="col-3 ps-3 pe-3">
        <Card.Header className="fw-bold fs-6 text-center">Welcome to the Would You Rather App</Card.Header>
        <Card.Header className="text-center">Please sign in to continue</Card.Header>
        <Card.Img variant='top' src={require("../images/react-icon.png")} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant='primary'>Sign In</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;

import { Button, Card } from "react-bootstrap";

const QuestionBoard = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Card>
        <Card.Header>Van Khanh Bui</Card.Header>
        <div className='d-flex justify-content-around align-items-center'>
          <div className='d-flex'>
            <img
              className='avatar-board'
              src={require("../images/man.png")}
              alt='avatar'
            />
          </div>
          <div className='col-8'>
          <Card.Body>
            <Card.Title>Would you rather</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button className='col-12' variant="outline-info">View Poll</Button>
          </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuestionBoard;

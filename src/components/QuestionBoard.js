import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const QuestionBoard = (props) => {
  const {question, user} = props;
  console.log('hello user author>>>>', question);
  const {id, author, optionOne, optionTwo, timestamp} = question;
  return (
    <div className='d-flex justify-content-center mb-3 col-12'>
      <Card className='col-12'>
        <Card.Header>{user?.name} asked:</Card.Header>
        <div className='d-flex justify-content-around align-items-center'>
          <div className='d-flex'>
            <img
              className='avatar-board'
              src={user?.avatarURL}
              alt='avatar'
            />
          </div>
          <div className='col-8'>
          <Card.Body>
            <Card.Title>Would you rather</Card.Title>
            <Card.Text className='col-8 text-truncate'>
              ...{optionOne.text}
            </Card.Text>
            <Button className='col-12' variant="outline-info">
              <Link to='/' />
            </Button>
          </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuestionBoard;

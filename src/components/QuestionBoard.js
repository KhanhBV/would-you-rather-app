import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const QuestionBoard = (props) => {
  const navigate = useNavigate();
  const { question, user } = props;
  const { optionOne } = question;
  const handleViewPoll = () => {
    navigate(`/questions/${question.id}`, {
      state: { user }
    });
  };
  return (
    <div className='d-flex justify-content-center mb-3 col-12'>
      <Card className='col-12'>
        <Card.Header>{user?.name} asks:</Card.Header>
        <div className='d-flex justify-content-around align-items-center'>
          <div className='d-flex'>
            <img className='avatar-board' src={user?.avatarURL} alt='avatar' />
          </div>
          <div className='col-8'>
            <Card.Body>
              <Card.Title>Would you rather</Card.Title>
              <Card.Text className='col-8 text-truncate'>
                ...{optionOne.text}
              </Card.Text>
              <button
                type='button'
                className='btn btn-primary col-12'
                variant='outline-info'
                onClick={() => handleViewPoll()}>
                View Poll
              </button>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuestionBoard;

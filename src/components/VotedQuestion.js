import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { saveQuestionAnswer } from "../redux/actions/questions";

export const VotedQuestion = () => {
  const location = useLocation();
  const { question, user, isAnswered } = location.state;
  const dispatch = useDispatch();

  const { authUser } = useSelector((state) => state.users);
  const [answer, setAnswer] = useState("");

  const totalOptionOneVote = question.optionOne.votes.length;
  const totalOptionTwoVote = question.optionTwo.votes.length;
  const totalVotes = totalOptionOneVote + totalOptionTwoVote;

  const handleChangeValue = (e) => {
    setAnswer(e.target.value);
  };

  const calculateOptionOnePercentage = () => {
    return (totalOptionOneVote / totalVotes) * 100;
  };

  const calculateOptionTwoPercentage = () => {
    return (totalOptionTwoVote / totalVotes) * 100;
  };

  const handleSaveAnswer = (e) => {
    e.preventDefault();
    console.log("123>>", answer);
    dispatch(saveQuestionAnswer(authUser.id, question.id, answer));
  };

  return (
    <div className='d-flex justify-content-center mb-3 col-12'>
      <Card className='card'>
        <Card.Header>
          {" "}
          {isAnswered ? `Asked by ${user.name}` : `${user.name} asks`}
        </Card.Header>
        <div className='d-flex justify-content-around align-items-center col-12'>
          <div className='d-flex ms-2'>
            <img className='avatar-board' src={user.avatarURL} alt='avatar' />
          </div>
          <div className='col-9 pe-2'>
            {isAnswered ? (
              <div className='pt-2 pb-2'>
                <h2 className='mt-2'>Results:</h2>
                <div
                  className={
                    "border p-3 mb-2 " +
                    (question.optionOne.votes.includes(user.id)
                      ? "bg-success bg-gradient"
                      : "")
                  }>
                  {question.optionOne.votes.includes(user.id) ? (
                    <p className='mb-2 fw-bold bg-warning bg-gradient col-4 text-center'>
                      Your vote
                    </p>
                  ) : (
                    ""
                  )}
                  <p>{question.optionOne.text}</p>
                  <div className='progress'>
                    <div
                      className='progress-bar'
                      role='progressbar'
                      style={{ width: `${calculateOptionOnePercentage()}%` }}
                      aria-valuemin='0'
                      aria-valuemax='100'>
                      {`${calculateOptionOnePercentage()}%`}
                    </div>
                  </div>
                  <h6 className='text-center mt-2'>{`${totalOptionOneVote} out of ${totalVotes}`}</h6>
                </div>
                <div
                  className={
                    "border p-3 mb-2 " +
                    (question.optionTwo.votes.includes(user.id)
                      ? "bg-success bg-gradient"
                      : "")
                  }>
                  {question.optionTwo.votes.includes(user.id) ? (
                    <p className='mb-2 fw-bold bg-warning bg-gradient col-4 text-center'>
                      Your vote
                    </p>
                  ) : (
                    ""
                  )}
                  <p>{question.optionTwo.text}</p>
                  <div className='progress'>
                    <div
                      className='progress-bar'
                      role='progressbar'
                      style={{ width: `${calculateOptionTwoPercentage()}%` }}
                      aria-valuemin='0'
                      aria-valuemax='100'>
                      {`${calculateOptionTwoPercentage()}%`}
                    </div>
                  </div>
                  <h6 className='text-center mt-2'>{`${totalOptionTwoVote} out of ${totalVotes}`}</h6>
                </div>
              </div>
            ) : (
              <Card.Body>
                <Card.Title>Would you rather</Card.Title>
                <Card.Text className='text-truncate'>
                  <form onSubmit={(e) => handleSaveAnswer(e)}>
                    <div className='htmlForm-check ms-1'>
                      <input
                        className='htmlForm-check-input'
                        type='radio'
                        name='option'
                        id='option1'
                        value='optionOne'
                        onChange={(e) => handleChangeValue(e)}
                      />
                      <label
                        className='htmlForm-check-label ms-1'
                        htmlFor='option1'>
                        {question.optionOne.text}
                      </label>
                    </div>
                    <div className='ms-1 mt-2 mb-3'>
                      <input
                        className='htmlForm-check-input'
                        value='optionTwo'
                        type='radio'
                        name='option'
                        id='option2'
                        onChange={(e) => handleChangeValue(e)}
                      />
                      <label
                        className='htmlForm-check-label text-wrap ms-1'
                        htmlFor='option2'>
                        {question.optionTwo.text}
                      </label>
                    </div>
                    <button
                      className='col-12 bg-primary text-white'
                      type='submit'>
                      Submit
                    </button>
                  </form>
                </Card.Text>
              </Card.Body>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VotedQuestion;

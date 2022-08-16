import { Card } from "react-bootstrap";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { saveQuestionAnswer } from "../redux/actions/questions";

export const VotedQuestion = () => {
  const checkTypeQuestion = (ques, user) => {
    const { optionOne, optionTwo } = ques;
    return (
      optionOne.votes.includes(user.id) || optionTwo.votes.includes(user.id)
    );
  };
  const params = useParams();
  const { authUser, users } = useSelector((state) => state.users);
  const { questions } = useSelector((state) => state.questions);
  const { question_id } = params;
  const question = questions && questions[question_id];
  const isAnswered =
    question && authUser && checkTypeQuestion(question, authUser);
  const location = useLocation();
  let user = location && location.state?.user;
  if (!user && question) {
    const userId = question.author;
    user = users[userId];
  }
  const dispatch = useDispatch();

  const [answer, setAnswer] = useState("");

  const totalOptionOneVote = question && question.optionOne.votes.length;
  const totalOptionTwoVote = question && question.optionTwo.votes.length;
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
    dispatch(saveQuestionAnswer(authUser.id, question.id, answer));
  };

  if (question) {
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
                      (question.optionOne.votes.includes(authUser.id)
                        ? "bg-success bg-gradient"
                        : "")
                    }>
                    {question.optionOne.votes.includes(authUser.id) ? (
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
                      (question.optionTwo.votes.includes(authUser.id)
                        ? "bg-success bg-gradient"
                        : "")
                    }>
                    {question.optionTwo.votes.includes(authUser.id) ? (
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
                  <div className='text-truncate'>
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
                  </div>
                </Card.Body>
              )}
            </div>
          </div>
        </Card>
      </div>
    );
  } else {
    return <Navigate to='/404' />;
  }
};

export default VotedQuestion;

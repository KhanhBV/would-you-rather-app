const LeaderBoard = (props) => {
  const { numberAnsweredQuestions, numberCreatedQuestions, score, user } = props;
  return (
    <div className='d-flex justify-content-center'>
      <div className='pt-3 pb-3 border d-flex col-5 justify-content-around align-items-center m-3'>
        <div className='align-items-center col-2'>
          <img
            className='avatar-board'
            src={user.avatarURL}
            alt='avatar'
          />
        </div>
        <div className='col-6 me-3 border-end border-start ps-3'>
          <div className='d-flex fw-bold fs-4'>
            <p>{user.name}</p>
          </div>
          <div className='d-flex'>
            <p className='col-10 text-align-center align-middle'>
              Answered questions
            </p>
            <p className='col-2'>{numberAnsweredQuestions}</p>
          </div>
          <div className='d-flex'>
            <p className='col-10'>Created questions</p>
            <p className='col-2'>{numberCreatedQuestions}</p>
          </div>
        </div>
        <div className='border pb-3 col-2 d-flex flex-column align-items-center'>
          <p className='bg-secondary pt-2 pb-2 text-center col-12 border-bottom bg-opacity-75'>
            Score
          </p>
          <p className='p-2 mt-1 bg-success rounded-circle fw-bold text-white'>
            {score}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;

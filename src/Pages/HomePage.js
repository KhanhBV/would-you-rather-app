import { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import QuestionBoard from "../components/QuestionBoard";
import { updateUnansweredQuestions } from "../redux/actions/questions";
import { updateAnsweredQuestions } from "./../redux/actions/questions";

const HomePage = () => {
  const dispatch = useDispatch();

  const { questions, answeredQuestions, unansweredQuestions } = useSelector(
    (state) => state.questions
  );
  const { users, authUser } = useSelector((state) => state.users);

  const filterQuestions = () => {
    let ansQuestion = [];
    let unansQuestion = [];
    if (questions && Object.values(questions).length > 0) {
      Object.values(questions).forEach((element) => {
        if (
          element?.optionOne?.votes.indexOf(authUser.id) > -1 ||
          element?.optionTwo?.votes.indexOf(authUser.id) > -1
        ) {
          ansQuestion.push(element);
        } else {
          unansQuestion.push(element);
        }
      });
    }
    dispatch(
      updateUnansweredQuestions(
        unansQuestion.sort((a, b) => b.timestamp - a.timestamp)
      )
    );
    dispatch(
      updateAnsweredQuestions(
        ansQuestion.sort((a, b) => b.timestamp - a.timestamp)
      )
    );
  };

  useEffect(() => {
    filterQuestions();
  }, [questions]);

  if (
    questions &&
    (answeredQuestions.length > 0 || unansweredQuestions.length > 0)
  ) {
    return (
      <div className='d-flex flex-column align-items-center mt-3 col-12'>
        <div className='border p-3 col-12 card'>
          <Tabs
            fill
            defaultActiveKey='unanswered'
            id='uncontrolled-tab-example'
            className='mb-3'>
            <Tab
              className='card'
              eventKey='unanswered'
              title='Unanswered Question'>
              {unansweredQuestions.length > 0 ? (
                unansweredQuestions.map((question) => (
                  <QuestionBoard
                    isAnswered={false}
                    key={question.id}
                    question={question}
                    user={users ? users[question?.author] : null}
                  />
                ))
              ) : (
                <div className='text-center'>Do not have items!</div>
              )}
            </Tab>
            <Tab eventKey='answered' title='Answered Question'>
              {answeredQuestions.length > 0 ? (
                answeredQuestions.map((question) => (
                  <QuestionBoard
                    isAnswered={true}
                    key={question.id}
                    question={question}
                    user={users ? users[question?.author] : null}
                  />
                ))
              ) : (
                <div className='text-center'>Do not have items!</div>
              )}
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
};

export default HomePage;

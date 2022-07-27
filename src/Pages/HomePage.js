import { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import QuestionBoard from "../components/QuestionBoard";
import {
  getQuestions,
  updateUnansweredQuestions,
} from "../redux/actions/questions";
import { getUsers } from "../redux/actions/users";

const HomePage = () => {
  const dispatch = useDispatch();

  const { questions } = useSelector((state) => state.questions);
  const { users } = useSelector((state) => state.users);
  const user = {
    id: "sarahedo",
    name: "Sarah Edo",
    avatarURL: "srcimagesman-blue-hoodie.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  };
  let ansQuestion = [];
  let unansQuestion = [];

  const loadQuestions = () => {
    dispatch(getQuestions());
    console.log("questions loaded>>", questions);
  };

  const loadUsers = () => {
    dispatch(getUsers());
  };

  const filterQuestions = () => {
    if (questions && Object.values(questions).length > 0) {
      Object.values(questions).forEach((element) => {
        if (
          element?.optionOne.votes.indexOf(user.id) > -1 ||
          element?.optionTwo.votes.indexOf(user.id) > -1
        ) {
          ansQuestion.push(element);
        } else {
          unansQuestion.push(element);
        }
      });
    }
  };

  useEffect(() => {
    loadQuestions();
    loadUsers();
  }, []);

  if (questions) {
    filterQuestions();
    console.log("return questions>", questions);
    return (
      <div className='d-flex flex-column align-items-center mt-3'>
        <div className='border p-3'>
          <Tabs
            fill
            defaultActiveKey='unanswered'
            id='uncontrolled-tab-example'
            className='mb-3'>
            <Tab eventKey='unanswered' title='Unanswered Question'>
              {unansQuestion.map((question) => (
                <QuestionBoard
                  question={question}
                  user={users ? users[question?.author] : null}
                />
              ))}
            </Tab>
            <Tab eventKey='answered' title='Answered Question'>
              {ansQuestion.map((question) => (
                <QuestionBoard
                  question={question}
                  user={users ? users[question?.author] : null}
                />
              ))}
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
};

export default HomePage;

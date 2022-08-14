import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveQuestion } from "../redux/actions/questions";
import { useNavigate } from "react-router-dom";

const NewQuestionForm = () => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {authUser} = useSelector((state) => state.users);

  const handleChangeOptionOne = (e) => {
    setOptionOne(e.target.value);
  };

  const handleChangeOptionTwo = (e) => {
    setOptionTwo(e.target.value);
  };

  const handleCreateNewQuestion = (e) => {
    e.preventDefault();
    if (optionOne && optionTwo) {
      dispatch(saveQuestion(optionOne, optionTwo, authUser.id));
    }
    navigate('/');
  };

  return (
    <div className='d-flex justify-content-center'>
      <Form
        className='col-8 d-flex flex-column justify-content-center card'
        onSubmit={(e) => handleCreateNewQuestion(e)}
        validated={false}>
        <Form.Text className='fs-3 fw-bold header'>
          Create New Question
        </Form.Text>
        <Form.Text className='fs-6'>Complete This Question:</Form.Text>
        <Form.Text className='fs-6 fw-bold'>Would You Rather...</Form.Text>
        <Form.Group className='mb-3 mt-3' controlId='formOptionOne'>
          <Form.Control
            type='text'
            placeholder='Enter Option One Text Here'
            onChange={(e) => handleChangeOptionOne(e)}
            isValid={optionOne ? true : false}
          />
        </Form.Group>
        <Form.Text className='fs-5 fw-bold align-self-center'>OR</Form.Text>
        <Form.Group className='mb-3 mt-3' controlId='formOptionTwo'>
          <Form.Control
            type='text'
            placeholder='Enter Option Two Text Here'
            onChange={(e) => handleChangeOptionTwo(e)}
            isValid={optionTwo ? true : false}
          />
        </Form.Group>
        <Button variant='success' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewQuestionForm;

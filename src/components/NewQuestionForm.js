import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const NewQuestionForm = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Form className='col-8 d-flex flex-column justify-content-center'>
        <Form.Text className='fs-3 fw-bold header'>
          Create New Question
        </Form.Text>
        <Form.Text className='fs-6'>
          Complete This Question:
        </Form.Text>
        <Form.Text className='fs-6 fw-bold'>
          Would You Rather...
        </Form.Text>
        <Form.Group className='mb-3 mt-3' controlId='formBasicEmail'>
          <Form.Control type='text' placeholder='Enter Option Two Text Here' />
        </Form.Group>
        <Form.Text className='fs-5 fw-bold align-self-center'>OR</Form.Text>
        <Form.Group className='mb-3 mt-3' controlId='formBasicPassword'>
          <Form.Control type='text' placeholder='Enter Option Two Text Here' />
        </Form.Group>
        <Button variant='success' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewQuestionForm;

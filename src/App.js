import './App.css';
import LeaderBoard from './components/LeaderBoard';
import Header from './components/Header';
import NewQuestionForm from './components/NewQuestionForm';
import QuestionBoard from './components/QuestionBoard';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      <Header/>
      <Login />
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import NewQuestionFormPage from "./Pages/NewQuestionFormPage";
import { Fragment, useEffect } from "react";
import AuthProvider from "./provider/AuthProvider";
import VotedQuestionPage from "./Pages/VotedQuestionPage";
import LeaderBoardPage from "./Pages/LeaderBoardPage";
import { useDispatch } from "react-redux";
import { getQuestions, saveQuestionAnswer } from "./redux/actions/questions";
import { getUsers } from "./redux/actions/users";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  const dispatch = useDispatch();

  const loadQuestions = () => {
    dispatch(getQuestions());
  };

  const loadUsers = () => {
    dispatch(getUsers());
  };

  useEffect(() => {
    loadQuestions();
    loadUsers();
  }, [saveQuestionAnswer]);

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/404' element={<NotFoundPage />} />
        <Route
          path='/'
          element={
            <AuthProvider>
              <HomePage />
            </AuthProvider>
          }
        />
        <Route
          path='/leaderboard'
          element={
            <AuthProvider>
              <LeaderBoardPage />
            </AuthProvider>
          }
        />
        <Route
          path='/add'
          element={
            <AuthProvider>
              <NewQuestionFormPage />
            </AuthProvider>
          }
        />
        <Route
          path='/questions/:question_id'
          element={
            <AuthProvider>
              <VotedQuestionPage />
            </AuthProvider>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;

import "./App.css";
import LeaderBoard from "./components/LeaderBoard";
import Header from "./components/Header";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import NewQuestionFormPage from "./Pages/NewQuestionFormPage";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/leaderBoard' element={<LeaderBoard />} />
        <Route path='/newQuestion' element={<NewQuestionFormPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;

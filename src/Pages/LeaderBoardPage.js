import LeaderBoard from "../components/LeaderBoard";
import { useSelector } from "react-redux";

const LeaderBoardPage = () => {
  const { users } = useSelector((state) => state.users);

  const countTotalScore = () => {
    console.log("leaderboard: countTotalScore");
    const ele = Object.values(users).map((user) => {
      console.log("user: ", user);
      const numberAnsweredQuestions = Object.values(user.answers).length;
      const numberCreatedQuestions = user.questions.length;
      const score = numberAnsweredQuestions + numberCreatedQuestions;
      console.log("answer: ", score);
      return {
        ...user,
        numberAnsweredQuestions,
        numberCreatedQuestions,
        score
      }
    }).sort((a, b) => b.score - a.score);

    return ele;
  };

  const renderLeaderBoard = () => {
    const data = countTotalScore();
    const ele = data.map(user => {
      return (
        <LeaderBoard
          user={user}
          numberAnsweredQuestions={user.numberAnsweredQuestions}
          numberCreatedQuestions={user.numberCreatedQuestions}
          score={user.score}
        />
      );
    });
    return ele;
  }
  return <>{renderLeaderBoard()}</>;
};

export default LeaderBoardPage;

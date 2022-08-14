import LeaderBoard from "../components/LeaderBoard";
import { useSelector } from "react-redux";

const LeaderBoardPage = () => {
  const { users } = useSelector((state) => state.users);

  const countTotalScore = () => {
    const ele =
      users &&
      Object.values(users)
        .map((user) => {
          const numberAnsweredQuestions = Object.values(user.answers).length;
          const numberCreatedQuestions = user.questions.length;
          const score = numberAnsweredQuestions + numberCreatedQuestions;
          return {
            ...user,
            numberAnsweredQuestions,
            numberCreatedQuestions,
            score,
          };
        })
        .sort((a, b) => b.score - a.score);

    return ele;
  };

  const renderLeaderBoard = () => {
    const data = countTotalScore();
    const ele = data.map((user) => {
      return (
        <LeaderBoard
          key={user.id}
          user={user}
          numberAnsweredQuestions={user.numberAnsweredQuestions}
          numberCreatedQuestions={user.numberCreatedQuestions}
          score={user.score}
        />
      );
    });
    return ele;
  };
  if (users) return <>{renderLeaderBoard()}</>;
};

export default LeaderBoardPage;

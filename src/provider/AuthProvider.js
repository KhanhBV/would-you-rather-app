import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../redux/actions/users";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.users);
  let authUserLocal = localStorage.getItem("authUser");

  if (
    !authUser &&
    (!authUserLocal ||
      authUserLocal === "undefined" ||
      authUserLocal === "null")
  ) {
    return <Navigate to='/login' />;
  } else if (!authUser && authUserLocal) {
    authUserLocal = JSON.parse(authUserLocal);
    dispatch(login(authUserLocal));
  }
  return <>{children}</>;
};

export default AuthProvider;

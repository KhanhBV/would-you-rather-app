import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthProvider = ({ children }) => {
  const { authUser } = useSelector((state) => state.users);
  const location = useLocation();

  if (!authUser) {
    return <Navigate to='/login' replace state={{path: location.pathname}} />;
  }
  return <>{children}</>;
};

export default AuthProvider;

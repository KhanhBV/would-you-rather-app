import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthProvider = ({children}) => {
  const {authUser} = useSelector(state => state.users);

  if (!authUser) {
    return <Navigate to='/login' />;
  }
  return <>{children}</>;
}
 
export default AuthProvider;
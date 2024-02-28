import { useAuth } from 'hook/useAuth';
import { Navigate } from 'react-router';

const Private = ({ children }) => {
  const { userID } = useAuth();

  if (userID === null) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default Private;

import { createContext } from 'react';
import { useAuth } from 'hook/useAuth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { currentUser } = useAuth();

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

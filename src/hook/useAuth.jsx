import { useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { useGetUserQuery } from 'redux/service/user/userApi';
import { toast } from 'sonner';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState({
    id: null,
    user: null,
  });
  const [userID, setUserID] = useState(null);

  const { data } = useGetUserQuery(userID, {
    skip: !userID,
  });

  const auth = getAuth();

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.info('User Logout!', {
          position: 'top-right',
        });
        setCurrentUser(() => ({
          id: null,
          user: null,
        }));
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  const registerUser = async (email, password) => {
    return createUserWithEmailAndPassword(getAuth(), email, password);
  };

  const loginUser = async (email, password) => {
    return signInWithEmailAndPassword(getAuth(), email, password);
  };

  useEffect(() => {
    if (userID ?? data)
      setCurrentUser(() => ({
        id: userID,
        user: { ...data },
      }));
  }, [userID, data]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserID(uid);
      } else {
        setUserID(null);
      }
    });
  }, [auth, userID]);

  return { currentUser, logoutUser, loginUser, registerUser, userID };
};

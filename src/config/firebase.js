import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDL7M260u4P9Idw2wAzQvN9x3ER501Vc80',
  authDomain: 'kubablog.firebaseapp.com',
  projectId: 'kubablog',
  storageBucket: 'kubablog.appspot.com',
  messagingSenderId: '861092800931',
  appId: '1:861092800931:web:d51098dc9026050ca6d216',
};

export const registerUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(), email, password);
};

export const loginUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(), email, password);
};

export const logoutUser = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      alert('User signed out!');
    })
    .catch((error) => {
      alert('Something went wrong!');
      const errorCode = error.code;
      console.log(errorCode);
    });
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

import { firestore } from 'config/firebase';
import { apiWithUserTag } from '../mainApi';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

import {
  addDoc,
  collection,
  // deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  // getDocs,
  // setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';

/* Change email user
  import { getAuth, updateEmail } from "firebase/auth";
  const auth = getAuth();

  updateEmail(auth.currentUser, "user@example.com")
    .then(() => { // Email updated!})
    .catch((error) => {      // An error occurred    });
*/

const userApi = apiWithUserTag.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      async queryFn(id) {
        try {
          const fetch = doc(firestore, 'user', id);
          const blog = await getDoc(fetch);

          return { data: blog.data() };
        } catch (error) {
          return { error };
        }
      },

      providesTags: ['User'],
    }),
    addUser: builder.mutation({
      async queryFn(data) {
        try {
          await addDoc(collection(firestore, 'user'), data);

          return { data: 'ok' };
        } catch (error) {
          return { error };
        }
      },
    }),
    updateUser: builder.mutation({
      async queryFn(data) {
        try {
          await updateDoc(doc(firestore, 'user', data.id), data);
          return { data: 'ok' };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ['User'],
    }),
    getAuthors: builder.query({
      async queryFn() {
        try {
          const authorRef = query(
            collection(firestore, 'user'),
            where('role', 'in', ['author'])
          );
          const res = await getDocs(authorRef);

          const authorArray = [];

          res.forEach((doc) => {
            authorArray.push({
              id: doc.id,
              ...doc.data(),
            });
          });

          return { data: authorArray };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation, useGetAuthorsQuery } =
  userApi;

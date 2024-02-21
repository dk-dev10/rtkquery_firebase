import { firestore } from 'config/firebase';
import { apiWithUserTag } from '../mainApi';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

import {
  addDoc,
  collection,
  // deleteDoc,
  doc,
  getDoc,
  // getDocs,
  // setDoc,
  updateDoc,
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
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;

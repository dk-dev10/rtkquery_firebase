import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  addDoc,
  collection,
  getDocs,
  // serverTimestamp,
} from 'firebase/firestore';
import { firestore } from '../config/firebase';

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      async queryFn() {
        try {
          const blogRef = await collection(firestore, 'blog');
          const blogRes = await getDocs(blogRef);

          const blogs = [];
          blogRes.forEach((doc) => {
            blogs.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          return { data: blogs };
        } catch (error) {
          return { error };
        }
      },
    }),
    addBlog: builder.mutation({
      async queryFn(data) {
        try {
          await addDoc(collection(firestore, 'blog'), {
            ...data,
            // date: serverTimestamp(),
          });

          return { data: 'ok' };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { useGetBlogsQuery, useAddBlogMutation } = blogApi;

import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  // serverTimestamp,
} from 'firebase/firestore';
import { firestore } from '../config/firebase';

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Blog'],
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
      providesTags: ['Blog'],
    }),
    getBlog: builder.query({
      async queryFn(id) {
        try {
          const fetch = await doc(firestore, 'blog', id);
          const blog = await getDoc(fetch);

          return { data: blog.data() };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ['Blog'],
    }),
    addBlog: builder.mutation({
      async queryFn(data) {
        try {
          await addDoc(collection(firestore, 'blog'), {
            ...data,
            date: 'date',
            // date: serverTimestamp(),
          });

          return { data: 'ok' };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ['Blog'],
    }),
    updateBlog: builder.mutation({
      async queryFn({ id, data }) {
        try {
          await updateDoc(doc(firestore, 'blog', id), data);
          return { data: 'ok' };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ['Blog'],
    }),
    deleteBlog: builder.mutation({
      async queryFn(id) {
        try {
          await deleteDoc(doc(firestore, 'blog', id));
          return { data: 'ok' };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ['Blog'],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useAddBlogMutation,
  useDeleteBlogMutation,
  useGetBlogQuery,
  useUpdateBlogMutation,
} = blogApi;

import { firestore } from 'config/firebase';
import { apiWithBlogTag } from '../mainApi';

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

const blogApi = apiWithBlogTag.injectEndpoints({
  tagTypes: ['Blog'],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      async queryFn() {
        try {
          const blogRef = collection(firestore, 'blog');
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
          const fetch = doc(firestore, 'blog', id);
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
          await addDoc(collection(firestore, 'blog'), data);

          return { data: 'ok' };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ['Blog'],
    }),
    updateBlog: builder.mutation({
      async queryFn({ id, data, imgUrl }) {
        try {
          await updateDoc(doc(firestore, 'blog', id), {
            ...data,
            img: imgUrl || data.img,
          });
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
    addUser: builder.mutation({
      async queryFn(data) {
        try {
          await setDoc(doc(firestore, 'user', data.id), {
            email: data.email,
          });
          return { data: 'ok' };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const {
  useGetBlogQuery,
  useGetBlogsQuery,
  useAddBlogMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
  useAddUserMutation,
} = blogApi;

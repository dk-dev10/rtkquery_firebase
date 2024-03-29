import { firestore } from 'config/firebase';
import { apiWithBlogTag } from '../mainApi';

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  endBefore,
  getCountFromServer,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  startAfter,
  updateDoc,
  where,
} from 'firebase/firestore';

const blogApi = apiWithBlogTag.injectEndpoints({
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
    getBlogsLimit: builder.query({
      async queryFn(count) {
        try {
          const blogRef = query(
            collection(firestore, 'blog'),
            limit(count),
            orderBy('date', 'asc')
          );
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
    getBlogsPagination: builder.query({
      async queryFn({ lim, next, prev, categorie }) {
        try {
          let blogRef, firstVisible, lastVisible, blogRes;
          if (next) {
            blogRef = query(
              collection(firestore, 'blog'),
              startAfter(next),
              where('categories', 'in', categorie),
              limit(lim)
            );

            blogRes = await getDocs(blogRef);
          } else if (prev) {
            blogRef = query(
              collection(firestore, 'blog'),
              endBefore(prev),
              where('categories', 'in', categorie),
              limit(lim)
            );
            blogRes = await getDocs(blogRef);
          } else {
            blogRef = query(
              collection(firestore, 'blog'),
              limit(lim),
              where('categories', 'in', categorie)
            );
            blogRes = await getDocs(blogRef);
            lastVisible = blogRes.docs[blogRes.docs.length - 1];
            firstVisible = blogRes.docs[0];
          }

          const blogs = [];
          blogRes.forEach((doc) => {
            blogs.push({
              id: doc.id,
              ...doc.data(),
            });
          });

          return {
            data: { blogs, next: lastVisible, prev: firstVisible },
          };
        } catch (error) {
          return { error };
        }
      },
    }),
    getBlog: builder.query({
      async queryFn({ id, authorId }) {
        try {
          let blog;
          if (authorId) {
            const fetch = doc(firestore, 'blog', id);
            const res = await getDoc(fetch);
            blog = res.data().author.id === authorId ? res.data() : undefined;
          } else {
            const fetch = doc(firestore, 'blog', id);
            blog = (await getDoc(fetch)).data();
          }

          return { data: blog };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ['Blog'],
    }),
    getCountBlogs: builder.query({
      async queryFn(categorie) {
        try {
          const coll = query(
            collection(firestore, 'blog'),
            where('categories', 'in', categorie)
          );
          const snapshot = await getCountFromServer(coll);
          const count = snapshot.data().count;
          return { data: count };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ['Blog'],
    }),
    addBlog: builder.mutation({
      async queryFn({ blogData, imgUrl }) {
        try {
          await addDoc(collection(firestore, 'blog'), {
            ...blogData,
            img: imgUrl,
            date: new Date(),
          });

          return { data: 'ok' };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ['Blog'],
    }),
    updateBlog: builder.mutation({
      async queryFn({ id, blogData, imgUrl }) {
        try {
          await updateDoc(doc(firestore, 'blog', id), {
            ...blogData,
            img: imgUrl || blogData.img,
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
  useGetCountBlogsQuery,
  useGetBlogsPaginationQuery,
  useAddBlogMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
  useAddUserMutation,
  useGetBlogsLimitQuery,
} = blogApi;

import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
// import { collection, getDocs } from 'firebase/firestore';
// import { firestore } from '../../config/firebase';

export const mainApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fakeBaseQuery(),
  endpoints: () => ({}),
  // endpoints: (builder) => ({
  //   getBlogs: builder.query({
  //     async queryFn() {
  //       try {
  //         const blogRef = collection(firestore, 'blog');
  //         const blogRes = await getDocs(blogRef);

  //         const blogs = [];s
  //         blogRes.forEach((doc) => {
  //           blogs.push({
  //             id: doc.id,
  //             ...doc.data(),
  //           });
  //         });
  //         return { data: blogs };
  //       } catch (error) {
  //         return { error };
  //       }
  //     },
  //     providesTags: ['Blog'],
  //   }),
  // }),
});
export const apiWithUserTag = mainApi.enhanceEndpoints({
  addTagTypes: ['User'],
});
export const apiWithBlogTag = mainApi.enhanceEndpoints({
  addTagTypes: ['Blog'],
});

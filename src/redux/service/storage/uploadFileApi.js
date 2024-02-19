import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { storage } from 'config/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export const fileUploadApi = createApi({
  reducerPath: 'fileUploadApi',
  baseQuery: fakeBaseQuery(), // Замените '/api' на ваш базовый URL для загрузки файлов
  endpoints: (builder) => ({
    uploadFile: builder.mutation({
      queryFn: async (file) => {
        const res = new Promise((resolve, reject) => {
          if (!file) return resolve(undefined);
          const storageRef = ref(storage, file?.name);
          const uploadTask = uploadBytesResumable(storageRef, file);
          uploadTask.on(
            'state_changed',
            () => {},
            (error) => {
              reject(error);
            },
            async () => {
              try {
                const downloadUrl = await getDownloadURL(
                  uploadTask.snapshot.ref
                );
                return resolve(downloadUrl);
              } catch (error) {
                reject(error);
              }
            }
          );
        });
        return { data: res };
      },
    }),
  }),
});

export const { useUploadFileMutation } = fileUploadApi;

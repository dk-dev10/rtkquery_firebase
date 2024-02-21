import { configureStore } from '@reduxjs/toolkit';
import { mainApi } from './service/mainApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { fileUploadApi } from './service/storage/uploadFileApi';

export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
    [fileUploadApi.reducerPath]: fileUploadApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      mainApi.middleware,
      fileUploadApi.middleware
    ),
});

setupListeners(store.dispatch);

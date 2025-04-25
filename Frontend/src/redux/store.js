// // src/redux/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './AuthSlice';
// import storage from 'redux-persist/lib/storage';
// import {persistReducer,persistStore} from 'redux-persist'


// const persistConfq={
//   key:"root",
//   storage

// }
// const persistedReducer=persistReducer(persistConfq,authReducer)
// export const store = configureStore({
//   reducer: {
//     auth: persistedReducer,
//   },
// });

// export const peristor=persistStore(store)

// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, 
         FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);




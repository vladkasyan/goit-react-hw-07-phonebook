import { configureStore } from '@reduxjs/toolkit';
import { ContactReducer } from './contacts/contactsSlice';
import { filtersReducer } from './filter/filtersSlice';
// import persistStore from 'redux-persist/es/persistStore';
// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedContactReducer = persistReducer(persistConfig, ContactReducer);

export const store = configureStore({
  reducer: {
    contacts: ContactReducer,
    filter: filtersReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);

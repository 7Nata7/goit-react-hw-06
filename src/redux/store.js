// import {
//  persistStore,
//  FLUSH,
//  REHYDRATE,
//  PAUSE,
//  PERSIST,
//  PURGE,
//  REGISTER,
// } from 'redux-persist';
// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactSlice';
// import { filtersReducer } from './filtersSlice';

// export const store = configureStore({
//  reducer: {
//    contacts: contactsReducer,
//    filters: filtersReducer,
//  },
//  middleware: getDefaultMiddleware =>
//    getDefaultMiddleware({
//      serializableCheck: {
//        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//      },
//    }),
// });

// export const persistor = persistStore(store);

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filtersReducer } from './filtersSlice';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

const rootReducer = {
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
  filters: filtersReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

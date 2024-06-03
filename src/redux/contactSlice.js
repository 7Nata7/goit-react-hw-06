// import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const contactsSlice = createSlice({
//   name: 'user',
//   initialState: {
//     items: [],
//   },

//   reducers: {
//     addContact: {
//       reducer: (state, action) => {
//         state.items = [...state.items, action.payload];
//       },
//       prepare: ({ name, number }) => {
//         const id = nanoid();
//         return { payload: { id, name, number } };
//       },
//     },
//     deleteContact: {
//       reducer: (state, action) => {
//         state.items = [
//           ...state.items.filter(item => item.id !== action.payload.id),
//         ];
//       },
//       prepare: id => {
//         return { payload: { id } };
//       },
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['items'],
// };

// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );


import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ name, number }) => {
        return { payload: { id: nanoid(), name, number } };
      },
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = state => state.contacts.items;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

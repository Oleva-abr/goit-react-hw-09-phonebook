import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // local storage
// import logger from 'redux-logger';
import { authReducer } from './auth';
import { contactsReducer } from './contacts';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

  // logger,
];
const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
});

const persistor = persistStore(store);

export default { store, persistor };

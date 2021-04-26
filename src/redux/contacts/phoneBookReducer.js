import { createReducer, combineReducers } from '@reduxjs/toolkit';

import contactActions from './phoneBookAction';

const initialState = {
  contacts: [],
  filter: '',
  loading: false,
  error: null,
};
const items = createReducer([], {
  [contactActions.fetchContactsSuccess]: (_, { payload }) => [...payload],
  [contactActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [contactActions.changeFilter]: (_, { payload }) => payload,
});

const onError = (_, { payload }) => payload;
const loading = createReducer(false, {
  //get
  [contactActions.fetchContactsRequest]: () => true,
  [contactActions.fetchContactsSuccess]: () => false,
  [contactActions.fetchContactsError]: () => false,
  //add contact
  [contactActions.addContactRequest]: () => true,
  [contactActions.addContactSuccess]: () => false,
  [contactActions.addContactError]: () => false,
  //delete contact
  [contactActions.deleteContactRequest]: () => true,
  [contactActions.deleteContactSuccess]: () => false,
  [contactActions.deleteContactError]: () => false,
});

const error = createReducer(initialState.error, {
  [contactActions.fetchContactsError]: onError,
  [contactActions.addContactError]: onError,
  [contactActions.deleteContactError]: onError,
  [contactActions.clearError]: () => null,
});
export default combineReducers({
  items,
  filter,
  loading,
  error,
});

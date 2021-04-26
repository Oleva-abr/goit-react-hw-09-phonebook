import { createAction } from '@reduxjs/toolkit';

//Get
const fetchContactsRequest = createAction('@phonebook/fetchContactsRequest'); //start
const fetchContactsSuccess = createAction('@phonebook/fetchContactsSuccess'); //success
const fetchContactsError = createAction('@phonebook/fetchContactsError'); //error

//AddContact
const addContactRequest = createAction('@phonebook/addContactRequest'); //start
const addContactSuccess = createAction('@phonebook/addContactSuccess'); //success
const addContactError = createAction('@phonebook/addContactError'); //error

//Delete contact

const deleteContactRequest = createAction('@phonebook/deleteContactRequest'); //start
const deleteContactSuccess = createAction('@phonebook/deleteContactSuccess'); //success
const deleteContactError = createAction('@phonebook/deleteContactError'); //error
//ChangeFilter
const changeFilter = createAction('@phonebook/changeFilter');

const clearError = createAction('@phonebook/clearError');

export default {
  //GET
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  //AddContact
  addContactRequest,
  addContactSuccess,
  addContactError,
  //Delete contact
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  //ChangeFilter
  changeFilter,
  //error
  clearError,
};

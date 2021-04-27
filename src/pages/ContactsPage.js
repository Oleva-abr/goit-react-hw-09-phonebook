import React from 'react';

import Spin from '../components/Spinner';
import { contactsSelectors } from '../redux/contacts';
//hook
import { useSelector } from 'react-redux';

import ContactsForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

const ContactsPage = () => {
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  return (
    <div>
      <h2>Contacts</h2>

      <ContactsForm />

      <Filter />

      {isLoadingContacts && <Spin />}

      <ContactList />
    </div>
  );
};

export default ContactsPage;

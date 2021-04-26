import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spin from '../components/Spinner';
import { contactsOperations, contactsSelectors } from '../redux/contacts';

import ContactsForm from '../components/ContactForm';

import Filter from '../components/Filter';

import ContactList from '../components/ContactList';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div>
        <h2>Contacts</h2>

        <ContactsForm />

        <Filter />

        {this.props.isLoadingContacts && <Spin />}

        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);

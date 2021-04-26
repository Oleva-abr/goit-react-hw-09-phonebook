import React, { Component } from 'react';

import PropTypes from 'prop-types';
import style from './contactForm.module.css';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

class ContactForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
  };
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  submitContact = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, onSubmit } = this.props;
    if (contacts.some(elm => elm.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contacts`);
    }

    onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div className={style.formWrapper}>
        <form onSubmit={this.submitContact}>
          <label className={style.label}>
            Name
            <input
              className={style.input}
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label className={style.label}>
            Number
            <input
              className={style.input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
            />
          </label>
          <button className={style.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(contactsOperations.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm); //

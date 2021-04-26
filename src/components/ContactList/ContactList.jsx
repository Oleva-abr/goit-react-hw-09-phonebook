import style from './contactList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={style.contactList}>
    {contacts.map(({ id, name, number }) => {
      return (
        <li className={style.item} key={id}>
          {name}: {number}
          <button className={style.btn} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

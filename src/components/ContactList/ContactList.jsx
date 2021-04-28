import style from './contactList.module.css';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

function ContactList() {
  // useSelector
  const contacts = useSelector(contactsSelectors.getFilteredContacts);

  // useDispatch
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul className={style.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.contactList}>
          {name}: {number}
          <button
            type="button"
            className={style.btn}
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;

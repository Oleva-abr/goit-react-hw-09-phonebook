import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import style from './contactForm.module.css';
// import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

// class ContactForm extends Component {
//   static propTypes = {
//     name: PropTypes.string,
//     value: PropTypes.string,
//   };
//   state = {
//     name: '',
//     number: '',
//   };

//   handleInputChange = e => {
//     const { name, value } = e.currentTarget;

//     this.setState({ [name]: value });
//   };

//   submitContact = e => {
//     e.preventDefault();
//     const { name } = this.state;
//     const { contacts, onSubmit } = this.props;
//     if (contacts.some(elm => elm.name.toLowerCase() === name.toLowerCase())) {
//       return toast(`${name} is already in contacts`);
//     }

//     onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <div className={style.formWrapper}>
//         <form onSubmit={this.submitContact}>
//           <label className={style.label}>
//             Name
//             <input
//               className={style.input}
//               type="name"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <label className={style.label}>
//             Number
//             <input
//               className={style.input}
//               type="tel"
//               name="number"
//               value={this.state.number}
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <button className={style.btn} type="submit">
//             Add contact
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   contacts: contactsSelectors.getAllContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onSubmit: contact => dispatch(contactsOperations.addContact(contact)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm); //

export default function ContactForm() {
  const [name, setName] = useState('');
  const changeName = e => {
    setName(e.target.value);
  };

  const [number, setNumber] = useState('');
  const changeNumber = e => {
    setNumber(e.target.value);
  };

  const contacts = useSelector(contactsSelectors.getAllContacts);
  const dispatch = useDispatch();

  const submitContact = e => {
    e.preventDefault();

    if (name === '') {
      toast(`Enter name`);
      return;
    }

    if (number === '') {
      toast(`Enter number`);
      return;
    }

    if (contacts.some(contact => contact.name === name)) {
      toast(`${name} is already in contacts.`);

      return;
    }
    dispatch(contactsOperations.addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <div className={style.formWrapper}>
      <form onSubmit={submitContact}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="name"
            name="name"
            value={name}
            onChange={changeName}
          />
        </label>
        <label className={style.label}>
          Number
          <input
            className={style.input}
            type="tel"
            name="number"
            value={number}
            onChange={changeNumber}
          />
        </label>
        <button className={style.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

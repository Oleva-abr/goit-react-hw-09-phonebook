import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './contactForm.module.css';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
//toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

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

    if (!name) {
      toast(`Enter name`);
      return;
    }

    if (!number) {
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

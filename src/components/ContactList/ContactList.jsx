import css from './ContactList.module.css';
//import { useState } from 'react';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, deleteUser }) => {
  return (
    <div>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} deleteUser={() => deleteUser(id)} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

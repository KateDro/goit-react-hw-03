import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';

const getContact = () => {
  const saveContact = window.localStorage.getItem('users');
  if (saveContact !== null) {
    return JSON.parse(saveContact);
  }
  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};
const App = () => {
  const [users, setUsers] = useState(getContact);

  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const userAdd = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  const userDelete = (userId) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId);
    });
  };

  const visibleName = users.filter((user) =>
    user.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div className={css.app}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={userAdd} />
      <SearchBox value={nameFilter} onChange={setNameFilter} />
      <ContactList contacts={visibleName} deleteUser={userDelete} />
    </div>
  );
};

export default App;

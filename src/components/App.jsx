import React, { useEffect, useState } from 'react';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import { Container, Section } from './App.styled';
import { checkIfUserExists, contactsFilter } from 'utils/phoneBookUtils';
import { PhoneBookFilter } from './PhoneBookFilter/PhoneBookFilter';
import { PhoneBookList } from './PhoneBookList/PhoneBookList';
import { loadFromLocalStorage, saveToLocalStorage } from 'utils/helpers';

const App = () => {
  const [contacts, setContacts] = useState(
    () => loadFromLocalStorage('phoneBookContacts') ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    saveToLocalStorage('phoneBookContacts', contacts);
  }, [contacts]);

  const addContact = newContact => {
    const checkResult = checkIfUserExists(contacts, newContact);
    if (checkResult) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handeFilter = e => {
    const { value } = e.currentTarget;

    setFilter(value);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const filtered = contactsFilter(contacts, filter);
  return (
    <Section>
      <Container>
        <PhoneBookForm addContact={addContact} />
        <PhoneBookFilter handleFilter={handeFilter} />
        {filtered.length ? (
          <PhoneBookList contacts={filtered} deleteContact={deleteContact} />
        ) : null}
        {!filtered.length && contacts.length ? 'There are no matches!' : null}
      </Container>
    </Section>
  );
};

export default App;

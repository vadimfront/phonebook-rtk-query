import React, { Component } from 'react';
import PhoneBookForm from './PhoneBook/PhoneBookForm';
import PhoneBookList from './PhoneBook/PhoneBookList';
import PhoneBookFilter from './PhoneBook/PhoneBookFilter/PhoneBookFilter';
import { Container, Section } from './App.styled';
import { checkIfUserExists } from 'utils/phoneBookUtils';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const checkResult = checkIfUserExists(contacts, newContact);
    if (checkResult) return;

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handeFilter = e => {
    const { value } = e.currentTarget;

    this.setState({
      filter: value,
    });
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Section>
        <Container>
          <PhoneBookForm addContact={this.addContact} />
          <PhoneBookFilter handeFilter={this.handeFilter} />
          <PhoneBookList
            contacts={contacts}
            filter={filter}
            deleteContact={this.deleteContact}
          />
        </Container>
      </Section>
    );
  }
}

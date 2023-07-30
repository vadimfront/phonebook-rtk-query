import React from 'react';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import { Container, Section } from './App.styled';
import { PhoneBookFilter } from './PhoneBookFilter/PhoneBookFilter';
import { PhoneBookList } from './PhoneBookList/PhoneBookList';

const App = () => {
  return (
    <Section>
      <Container>
        <PhoneBookForm />
        <PhoneBookFilter />
        <PhoneBookList />
      </Container>
    </Section>
  );
};

export default App;

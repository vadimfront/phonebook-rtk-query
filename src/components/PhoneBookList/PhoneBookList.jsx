import React from 'react';
import { List } from './PhoneBookList.styed';
import PhoneBookListItem from 'components/PhoneBookListItem/PhoneBookListItem';

export default function PhoneBookList({ contacts, deleteContact }) {
  console.log();
  return (
    <List>
      <PhoneBookListItem contacts={contacts} deleteContact={deleteContact} />
    </List>
  );
}

import React from 'react';
import { Button } from 'components/PhoneBookForm/PhoneBookForm.styled';
import { ListItem } from './PhoneBookListItem.styled';

export default function PhoneBookListItem({ contacts, deleteContact }) {
  const contactList = contacts.map(contact => {
    const { name, number, id } = contact;
    return (
      <ListItem key={id}>
        {name}: {number}
        <Button size="small" onClick={() => deleteContact(id)}>
          Delete
        </Button>
      </ListItem>
    );
  });
  return contactList;
}

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/PhoneBookForm/PhoneBookForm.styled';
import { ListItem } from './PhoneBookListItem.styled';

export const PhoneBookListItem = ({ contacts, deleteContact }) => {
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
};

PhoneBookListItem.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';
import { List } from './PhoneBookList.styed';
import { PhoneBookListItem } from 'components/PhoneBookListItem/PhoneBookListItem';

export const PhoneBookList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <PhoneBookListItem
          key={id}
          itemId={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </List>
  );
};

PhoneBookList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

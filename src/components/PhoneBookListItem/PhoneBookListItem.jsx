import React from 'react';
import { Button } from 'components/PhoneBookForm/PhoneBookForm.styled';
import { ListItem } from './PhoneBookListItem.styled';

export const PhoneBookListItem = ({ itemId, name, number, deleteContact }) => {
  return (
    <ListItem key={itemId}>
      {name}: {number}
      <Button size="small" onClick={() => deleteContact(itemId)}>
        Delete
      </Button>
    </ListItem>
  );
};

PhoneBookListItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func,
};

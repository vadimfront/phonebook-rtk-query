import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from './PhoneBookList.styed';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterContactsTerm } from 'reducer/selectors';
import { Button } from 'components/PhoneBookForm/PhoneBookForm.styled';
import { contactsFilter } from 'utils/phoneBookUtils';
import { deleteContact } from 'reducer/contactsSlice';

export const PhoneBookList = () => {
  const contacts = useSelector(getContacts);
  const filterContactsTerm = useSelector(getFilterContactsTerm);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));
  const filteredContacts = contactsFilter(contacts, filterContactsTerm);

  return (
    <>
      {filteredContacts.length > 0 && (
        <List>
          {filteredContacts.map(({ name, number, id }) => (
            <ListItem key={id}>
              {name}: {number}
              <Button size="small" onClick={() => handleDelete(id)}>
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      )}
      {!filteredContacts.length && contacts.length > 0 && 'There is no matches'}
    </>
  );
};

PhoneBookList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

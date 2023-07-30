import React from 'react';
import {
  BtnDelete,
  ContactName,
  ContactNumber,
  List,
  ListItem,
} from './PhoneBookList.styed';
import { Button } from 'components/PhoneBookForm/PhoneBookForm.styled';
import { contactsFilter } from 'utils/phoneBookUtils';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'reducer/phoneBookApi';
import { getFilterContactsTerm } from 'reducer/selectors';
import { useSelector } from 'react-redux';
import { ReactComponent as IconDelete } from '../../assets/svg/iconDelete.svg';
import Spinner from 'components/Spinner/Spinner';

export const PhoneBookList = () => {
  const {
    data: contacts,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetContactsQuery();
  const [deleteContacts] = useDeleteContactMutation();

  const filterTerm = useSelector(getFilterContactsTerm);
  const filteredContacts = contacts && contactsFilter(contacts, filterTerm);

  const contentExist = !(isLoading ?? isError) && filteredContacts.length > 0;
  const noFilterResults =
    !(isLoading ?? isError) &&
    contacts.length > 0 &&
    !filteredContacts.length > 0;

  return (
    <>
      {isFetching && <Spinner />}
      {isError && error.message}
      {contentExist && (
        <List>
          {contacts.map(({ contactName, phoneNamber, id }) => (
            <ListItem key={id}>
              <ContactName>{contactName}</ContactName>
              <ContactNumber>{phoneNamber}</ContactNumber>
              <BtnDelete size="small" onClick={() => deleteContacts(id)}>
                <IconDelete />
              </BtnDelete>
            </ListItem>
          ))}
        </List>
      )}
      {noFilterResults && 'There is no matches'}
    </>
  );
};

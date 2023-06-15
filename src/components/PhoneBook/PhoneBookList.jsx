import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from './PhoneBookList.styed';
import { Button } from './PhoneBookForm.styled';
import { contactsFilter } from 'utils/phoneBookUtils';

export default class PhoneBookList extends Component {
  createContactsList = contactsList => {
    return contactsList.map(contact => {
      const { name, number, id } = contact;
      return (
        <ListItem key={id}>
          {name}: {number}
          <Button size="small" onClick={() => this.props.deleteContact(id)}>
            Delete
          </Button>
        </ListItem>
      );
    });
  };

  renderContacts = () => {
    const { contacts, filter } = this.props;

    if (!contacts.length) return;

    const filteredData = contactsFilter(contacts, filter);
    const newContactsData = filteredData.length ? filteredData : contacts;
    const contactsMarkup = this.createContactsList(newContactsData);

    return <List>{contactsMarkup}</List>;
  };

  render() {
    const itemList = this.renderContacts();

    return <div>{itemList}</div>;
  }
}

PhoneBookList.propTypes = {
  deleteContact: PropTypes.func,
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

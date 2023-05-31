import React, { Component } from 'react';
import { Button, Field, FieldGroup, Form, Label } from './PhoneBookForm.styled';
import { nanoid } from 'nanoid';

export default class PhoneBookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const { name, number } = this.state;
    const { addContact } = this.props;

    const newContact = {
      name: name,
      number: number,
      id: id,
    };
    addContact(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <FieldGroup>
            <Field
              type="text"
              id="phone_book__name"
              name="name"
              value={name}
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.handleChange}
              required
            />
            <Label htmlFor="phone_book__name">Name</Label>
          </FieldGroup>
          <FieldGroup>
            <Field
              type="tel"
              id="phone_book__number"
              name="number"
              value={number}
              placeholder="Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.handleChange}
              required
            />
            <Label htmlFor="phone_book__number">Number</Label>
          </FieldGroup>
          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}

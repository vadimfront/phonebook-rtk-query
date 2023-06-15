import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  StyledFormikField,
  FieldGroup,
  FormBook,
  Label,
} from './PhoneBookForm.styled';
import { nanoid } from 'nanoid';
import { nameRegExp, phoneRegExp } from 'components/constants';

export default class PhoneBookForm extends Component {
  initialValues = {
    name: '',
    number: '',
  };

  validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(nameRegExp, 'Invalid name')
      .required('Name is required'),
    number: Yup.string()
      .matches(phoneRegExp, 'Invalid phone number')
      .required('Phone number is required'),
  });

  handleSubmit = (values, { resetForm }) => {
    const { addContact } = this.props;
    const id = nanoid();

    const newContact = {
      id: id,
      ...values,
    };

    addContact(newContact);

    resetForm({ values: this.initialValues });
  };

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={this.validationSchema}
        onSubmit={this.handleSubmit}
      >
        <FormBook>
          <FieldGroup>
            <StyledFormikField
              type="text"
              id="phone_book__name"
              name="name"
              placeholder="Name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <ErrorMessage name="name" component="div" />
            <Label htmlFor="phone_book__name">Name</Label>
          </FieldGroup>
          <FieldGroup>
            <StyledFormikField
              type="tel"
              id="phone_book__number"
              name="number"
              placeholder="Number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <ErrorMessage name="number" component="div" />

            <Label htmlFor="phone_book__number">Number</Label>
          </FieldGroup>
          <Button type="submit">Add contact</Button>
        </FormBook>
      </Formik>
    );
  }
}

PhoneBookForm.propTypes = {
  addContact: PropTypes.func,
};

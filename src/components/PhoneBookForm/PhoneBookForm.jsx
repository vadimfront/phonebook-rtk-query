import React from 'react';
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

const PhoneBookForm = ({ addContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(nameRegExp, 'Invalid name')
      .required('Name is required'),
    number: Yup.string()
      .matches(phoneRegExp, 'Invalid phone number')
      .required('Phone number is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const id = nanoid();

    const newContact = {
      id: id,
      ...values,
    };

    addContact(newContact);

    resetForm({ values: initialValues });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
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
};

export default PhoneBookForm;

PhoneBookForm.propTypes = {
  addContact: PropTypes.func,
};

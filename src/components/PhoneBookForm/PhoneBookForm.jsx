import React, { useState } from 'react';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  StyledFormikField,
  FieldGroup,
  FormBook,
  Label,
} from './PhoneBookForm.styled';
import { nameRegExp, phoneRegExp } from 'components/constants';
import { checkIfContactExists } from 'utils/phoneBookUtils';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'reducer/phoneBookApi';
import { nanoid } from 'nanoid';

const PhoneBookForm = () => {
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const initialValues = {
    contactName: '',
    phoneNamber: '',
  };

  const validationSchema = Yup.object().shape({
    contactName: Yup.string()
      .matches(nameRegExp, 'Invalid name')
      .required('Name is required'),
    phoneNamber: Yup.string()
      .matches(phoneRegExp, 'Invalid phone number')
      .required('Phone number is required'),
  });

  const handleSubmit = ({ contactName, phoneNamber }, { resetForm }) => {
    const checkResult = checkIfContactExists(contacts, contactName);
    console.log(checkResult);
    if (checkResult) {
      alert(`${contactName} is already in contacts.`);
      return;
    }
    const newContact = {
      id: nanoid(),
      contactName: contactName,
      phoneNamber: phoneNamber,
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
            name="contactName"
            placeholder="Name"
            autoComplete="off"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="contactName" component="div" />
          <Label htmlFor="phone_book__name">Name</Label>
        </FieldGroup>
        <FieldGroup>
          <StyledFormikField
            type="tel"
            id="phone_book__number"
            name="phoneNamber"
            placeholder="Number"
            autoComplete="off"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage name="phoneNamber" component="div" />

          <Label htmlFor="phone_book__number">Number</Label>
        </FieldGroup>
        <Button type="submit">Add contact</Button>
      </FormBook>
    </Formik>
  );
};

export default PhoneBookForm;

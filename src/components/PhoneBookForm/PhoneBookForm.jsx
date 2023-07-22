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
import { nameRegExp, phoneRegExp } from 'components/constants';
import { useDispatch, useSelector } from 'react-redux';
import { checkIfContactExists } from 'utils/phoneBookUtils';
import { getContacts } from 'reducer/selectors';
import { addContact } from 'reducer/contactsSlice';

const PhoneBookForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

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

  const handleSubmit = ({ name, number }, { resetForm }) => {
    console.log(name, contacts);
    const checkResult = checkIfContactExists(contacts, name);
    if (checkResult) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
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

// PhoneBookForm.propTypes = {
//   addContact: PropTypes.func,
// };

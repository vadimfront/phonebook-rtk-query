import React from 'react';
import PropTypes from 'prop-types';
import { Filter, Field } from './PhoneBookFilter.styled';
import { FieldGroup, Label } from '../PhoneBookForm/PhoneBookForm.styled';

export const PhoneBookFilter = ({ handleFilter }) => {
  return (
    <Filter>
      <FieldGroup>
        <Field
          type="text"
          id="filter"
          placeholder="Find contacts by name"
          onChange={handleFilter}
        />
        <Label htmlFor="filter">Find contacts by name</Label>
      </FieldGroup>
    </Filter>
  );
};

PhoneBookFilter.propTypes = {
  handleFilter: PropTypes.func,
};

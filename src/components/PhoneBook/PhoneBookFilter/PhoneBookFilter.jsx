import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Filter, Field } from './PhoneBookFilter.styled';
import { FieldGroup, Label } from '../PhoneBookForm.styled';

export default class PhoneBookFilter extends Component {
  render() {
    return (
      <Filter>
        <FieldGroup>
          <Field
            type="text"
            id="filter"
            placeholder="Find contacts by name"
            onChange={this.props.handeFilter}
          />
          <Label htmlFor="filter">Find contacts by name</Label>
        </FieldGroup>
      </Filter>
    );
  }
}

PhoneBookFilter.propTypes = {
  handeFilter: PropTypes.func,
};

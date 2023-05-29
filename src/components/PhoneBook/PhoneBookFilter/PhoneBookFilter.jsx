import React, { Component } from 'react';
import { Filter } from './PhoneBookFilter.styled';
import { Field, FieldGroup, Label } from '../PhoneBookForm.styled';

export default class PhoneBookFilter extends Component {
  // searchContact = e => {
  //   const { setFilter } = this.props;
  //   const { value } = e.currentTarget;
  //   setFilter(value);
  // };

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

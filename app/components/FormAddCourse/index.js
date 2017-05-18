import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import styled from 'styled-components';
import FieldForm from '../FieldForm';
import Wrapper from './Wrapper';
import ViewBottomToolbar from '../ViewBottomToolbar';
import ButtonFlat from '../ButtonFlat';

function FormAddCourse(props) {
  return (
    <form onSubmit={props.handleSubmit} className="form-login">
      <Wrapper>
        <Field name="name" type="text" component={FieldForm} label="Name" hintText="Course name" />
        <Field name="description" type="text" component={FieldForm} label="Description" hintText="Course description" multiLine />
      </Wrapper>
      <ViewBottomToolbar>
        <ButtonFlat label="Cancel" />
        <Spacer />
        <ButtonFlat label="Add course" highlighted />
      </ViewBottomToolbar>
    </form>
  );
}

const Spacer = styled.span`
  width: 12px;
`;

FormAddCourse.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'FormAddCourse',
})(FormAddCourse);

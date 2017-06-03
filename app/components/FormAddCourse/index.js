import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import styled from 'styled-components';
import { REQUEST_STATUS } from 'global-constants';
import FieldForm from '../FieldForm';
import StyledFormWrapper from '../StyledFormWrapper';
import ViewBottomToolbar from '../ViewBottomToolbar';
import ButtonFlat from '../ButtonFlat';
import validate from './validate';

function FormAddCourse(props) {
  return (
    <form onSubmit={props.handleSubmit} className="form-login">
      <StyledFormWrapper>
        <Field name="name" type="text" component={FieldForm} label="Name" hintText="Course name" />
        <Field name="description" type="text" component={FieldForm} label="Description" hintText="Course description" multiLine />
      </StyledFormWrapper>
      <ViewBottomToolbar>
        <ButtonFlat label="Cancel" onClick={props.cancelAddCourse} />
        <Spacer />
        <ButtonFlat label="Add course" highlighted type="submit" disabled={props.invalid || props.status === REQUEST_STATUS.REQUESTING} />
      </ViewBottomToolbar>
    </form>
  );
}

const Spacer = styled.span`
  width: 12px;
`;

FormAddCourse.propTypes = {
  handleSubmit: PropTypes.func,
  status: PropTypes.number,
  invalid: PropTypes.bool,
  cancelAddCourse: PropTypes.func,
};

export default reduxForm({
  form: 'FormAddCourse',
  validate,
})(FormAddCourse);

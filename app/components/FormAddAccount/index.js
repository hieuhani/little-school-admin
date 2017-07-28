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

class FormAddAccount extends React.PureComponent { // eslint-disable-line
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <StyledFormWrapper>
          <Field name="first_name" type="text" component={FieldForm} label="First Name" hintText="First Name" />
          <Field name="last_name" type="text" component={FieldForm} label="Last Name" hintText="Last Name" />
          <Field name="email" type="text" component={FieldForm} label="Email" hintText="Email" />
          <Field name="password" type="text" component={FieldForm} label="Password" hintText="Password" />
        </StyledFormWrapper>
        <ViewBottomToolbar>
          <ButtonFlat label="Cancel" onClick={this.props.cancelAddAccount} />
          <Spacer />
          <ButtonFlat label="Add user" highlighted type="submit" disabled={this.props.invalid || this.props.status === REQUEST_STATUS.REQUESTING} />
        </ViewBottomToolbar>
      </form>
    );
  }
}

const Spacer = styled.span`
  width: 12px;
`;


FormAddAccount.propTypes = {
  handleSubmit: PropTypes.func,
  status: PropTypes.number,
  invalid: PropTypes.bool,
  cancelAddAccount: PropTypes.func,
};

export default reduxForm({
  form: 'FormAddAccount',
  validate,
})(FormAddAccount);

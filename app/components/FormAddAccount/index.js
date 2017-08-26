import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import styled from 'styled-components';
import { REQUEST_STATUS } from 'global-constants';
import _ from 'lodash';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import FieldForm from '../FieldForm';
import StyledFormWrapper from '../StyledFormWrapper';
import ViewBottomToolbar from '../ViewBottomToolbar';
import ButtonFlat from '../ButtonFlat';
import validate from './validate';

class FormAddAccount extends React.PureComponent { // eslint-disable-line
  render() {
    if (this.props.editMode) {
      if (!this.props.user) {
        return null;
      }
    }
    return (
      <form onSubmit={this.props.handleSubmit}>
        <StyledFormWrapper>
          <Field name="full_name" type="text" component={FieldForm} label="Full Name" hintText="Full Name" />
          <Field name="phone" type="text" component={FieldForm} label="Phone" hintText="Phone" />
          <Field name="parent_name" type="text" component={FieldForm} label="Parent Name" hintText="Parent Name" />
          <Field name="email" type="email" component={FieldForm} label="Email" hintText="Email" />
          <Field name="class_text" type="text" component={FieldForm} label="Real Class" hintText="Real Class" />
          <Field name="password" type="text" component={FieldForm} label="Password" hintText="Password" />
        </StyledFormWrapper>
        <ViewBottomToolbar>
          <ButtonFlat label="Cancel" onClick={this.props.cancelAddAccount} />
          <Spacer />
          <ButtonFlat label={this.props.editMode ? 'Update user' : 'Add user'} highlighted type="submit" disabled={this.props.invalid || this.props.status === REQUEST_STATUS.REQUESTING} />
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
  editMode: PropTypes.bool,
  cancelAddAccount: PropTypes.func,
  user: PropTypes.instanceOf(Immutable.Map),
};

export default connect((state, ownProps) => {
  if (!ownProps.user) return {};
  return {
    initialValues: _.pick(ownProps.user.toJS(), [
      'full_name',
      'phone',
      'parent_name',
      'email',
      'class_text',
    ]),
  };
})(reduxForm({
  form: 'FormAddAccount',
  validate,
})(FormAddAccount));

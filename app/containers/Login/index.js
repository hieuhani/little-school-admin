import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectError,
  selectLoginLoading,
  selectLoggedUser,
} from './selectors';
import {
  signInByEmail,
} from './actions';
import {
  checkLogInStatus as authenticationCheckLogInStatus,
} from '../Authentication/actions';

import ViewLogin from '../../components/ViewLogin';

export class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.handleLoginFormSubmit = (values) => {
      this.props.signInByEmail(values.toJS());
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedUser) {
      this.props.authenticationCheckLogInStatus();
    }
  }

  render() {
    return (
      <ViewLogin
        error={this.props.error}
        onLoginFormSubmit={this.handleLoginFormSubmit}
        formSubmitting={this.props.loading}
      />
    );
  }
}

Login.propTypes = {
  signInByEmail: React.PropTypes.func,
  authenticationCheckLogInStatus: React.PropTypes.func,
  loading: React.PropTypes.bool,
  error: React.PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  error: selectError(),
  loading: selectLoginLoading(),
  loggedUser: selectLoggedUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    signInByEmail: (loginData) => (dispatch(signInByEmail(loginData))),
    authenticationCheckLogInStatus: () => (dispatch(authenticationCheckLogInStatus())),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

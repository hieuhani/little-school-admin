/*
 *
 * NavigationBar
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { logout } from './actions';
import {
  checkLogInStatus,
} from '../Authentication/actions';
import {
  selectLoggedOut,
} from './selectors';
import ViewNavigationBar from '../../components/ViewNavigationBar';

export class NavigationBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleUserSignOut = () => {
      this.props.logout();
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedOut) {
      this.props.checkLogInStatus();
    }
  }
  render() {
    return (
      <ViewNavigationBar
        handleUserSignOut={this.handleUserSignOut}
      />
    );
  }
}

NavigationBar.propTypes = {
  logout: React.PropTypes.func,
  checkLogInStatus: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loggedOut: selectLoggedOut(),
});

function mapDispatchToProps(dispatch) {
  return {
    checkLogInStatus: () => (dispatch(checkLogInStatus())),
    logout: () => (dispatch(logout())),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import { DEFAULT_SCHOOL_KEY } from 'config';
import { logout } from './actions';
import {
  checkLogInStatus,
} from '../Authentication/actions';
import {
  selectLoggedOut,
} from './selectors';
import {
  selectSchool,
} from '../Dashboard/selectors';
import ViewNavigationBar from '../../components/ViewNavigationBar';

export class NavigationBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleUserSignOut = () => {
      this.props.logout();
    };

    this.handleChangeSchool = () => {
      window.localStorage.removeItem(DEFAULT_SCHOOL_KEY);
      window.location.reload();
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
        handleChangeSchool={this.handleChangeSchool}
        school={this.props.school}
      />
    );
  }
}

NavigationBar.propTypes = {
  logout: PropTypes.func,
  checkLogInStatus: PropTypes.func,
  school: PropTypes.instanceOf(Immutable.Map),
};

const mapStateToProps = createStructuredSelector({
  loggedOut: selectLoggedOut(),
  school: selectSchool(),
});

function mapDispatchToProps(dispatch) {
  return {
    checkLogInStatus: () => (dispatch(checkLogInStatus())),
    logout: () => (dispatch(logout())),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);

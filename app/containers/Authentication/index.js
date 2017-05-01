import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Login from '../Login';
import Dashboard from '../Dashboard';
import {
  selectLoginStatus,
} from './selectors';
import {
  checkLogInStatus,
} from './actions';

export class Authentication extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.checkLogInStatus();
  }

  render() {
    // Make sure rendering dashboard or login view once after checking login status
    if (typeof this.props.isLoggedIn === 'undefined') {
      return (
        <div>
          Loading
        </div>
      );
    }
    let page = <Login />;
    if (this.props.isLoggedIn) {
      page = (
        <Dashboard pathname={this.props.location.pathname}>
          {this.props.children}
        </Dashboard>
      );
    }
    return page;
  }
}


Authentication.propTypes = {
  checkLogInStatus: React.PropTypes.func,
  isLoggedIn: React.PropTypes.bool,
  children: React.PropTypes.node,
  location: React.PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn: selectLoginStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    checkLogInStatus: () => (dispatch(checkLogInStatus())),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);

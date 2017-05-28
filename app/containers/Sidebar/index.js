/*
 *
 * Sidebar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ViewSidebar from '../../components/ViewSidebar';

export class Sidebar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ViewSidebar pathname={this.props.pathname} />
    );
  }
}

Sidebar.propTypes = {
  pathname: PropTypes.string,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Sidebar);

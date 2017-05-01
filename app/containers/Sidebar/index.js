/*
 *
 * Sidebar
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import ViewSidebar from '../../components/ViewSidebar';

export class Sidebar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ViewSidebar />
    );
  }
}

Sidebar.propTypes = {
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Sidebar);

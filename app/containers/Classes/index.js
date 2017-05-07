/*
 *
 * Classes
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectClasses from './selectors';

export class Classes extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        Classes
      </div>
    );
  }
}

Classes.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  Classes: makeSelectClasses(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Classes);

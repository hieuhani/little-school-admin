/*
 *
 * Unit
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

export class Unit extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { unitId } = this.props.params;
    console.log(unitId); // eslint-disable-line no-console
  }

  render() {
    return (
      <div>
        Unit
      </div>
    );
  }
}

Unit.propTypes = {
  params: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Unit);

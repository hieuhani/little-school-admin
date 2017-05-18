import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ViewUnitDetail from '../../components/ViewUnitDetail';

export class Unit extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { unitId } = this.props.params;
    console.log(`Unit ID: ${unitId}`); // eslint-disable-line no-console
  }

  render() {
    return (
      <div>
        <ViewUnitDetail />
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

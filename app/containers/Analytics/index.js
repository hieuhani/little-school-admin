import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ViewChartTotalUsers from '../../components/ViewChartTotalUsers';
import ViewChartAppStatistics from '../../components/ViewChartAppStatistics';

export class Analytics extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ViewChartTotalUsers />
        <ViewChartAppStatistics />
      </div>
    );
  }
}

Analytics.propTypes = {
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);

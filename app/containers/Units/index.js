import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ViewCourseHeader from '../../components/ViewCourseHeader';
import ViewUnitList from '../../components/ViewUnitList';

export class Units extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { courseId } = this.props.params;
    console.log(courseId); // eslint-disable-line no-console
  }

  render() {
    return (
      <div>
        <ViewCourseHeader />
        <ViewUnitList />
        {this.props.children}
      </div>
    );
  }
}

Units.propTypes = {
  params: PropTypes.object,
  children: PropTypes.node,
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Units);

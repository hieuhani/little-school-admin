import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ViewCoursesHeader from '../../components/ViewCoursesHeader';
import ViewCourseList from '../../components/ViewCourseList';

export class Courses extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ViewCoursesHeader />
        <ViewCourseList />
        {this.props.children}
      </div>
    );
  }
}

Courses.propTypes = {
  children: PropTypes.node,
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);

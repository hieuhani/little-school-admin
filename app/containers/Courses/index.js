/*
 *
 * Courses
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ViewCoursesHeader from '../../components/ViewCoursesHeader';
import ViewCourseList from '../../components/ViewCourseList';
import ViewDialog from '../../components/ViewDialog';

export class Courses extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ViewCoursesHeader />
        <ViewCourseList />
        {this.props.children && <ViewDialog>
          {this.props.children}
        </ViewDialog>}
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

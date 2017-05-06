import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ViewCourseHeader from '../../components/ViewCourseHeader';
import ViewUnitList from '../../components/ViewUnitList';

export class Course extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { courseId } = this.props.params;
    console.log(courseId); // eslint-disable-line no-console
  }

  render() {
    return (
      <div>
        <ViewCourseHeader />
        <ViewUnitList />
      </div>
    );
  }
}

Course.propTypes = {
  params: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);

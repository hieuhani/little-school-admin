import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { REQUEST_STATUS } from 'global-constants';
import { createStructuredSelector } from 'reselect';
import ViewDialog from '../../components/ViewDialog';
import FormAddUnit from '../../components/FormAddUnit';
import ViewDialogHeader from '../../components/ViewDialogHeader';
import {
  createUnit,
} from './actions';
import {
  selectStatus,
} from './selectors';
import {
  selectDefaultSchool,
} from '../Dashboard/selectors';

export class UnitsAdd extends React.PureComponent {
  constructor(props) {
    super(props);
    this.closeForm = () => {
      browserHistory.push(`/courses/${this.props.params.courseId}/units`);
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.status === REQUEST_STATUS.REQUESTING && nextProps.status === REQUEST_STATUS.SUCCEEDED) {
      this.closeForm();
    }
  }

  render() {
    return (
      <ViewDialog header={<ViewDialogHeader title="Add new unit" />}>
        <FormAddUnit
          cancelAddUnit={this.closeForm}
          onSubmit={(formValues) => this.props.createUnit(this.props.defaultSchool, this.props.params.courseId, formValues)}
          status={this.props.status}
        />
      </ViewDialog>
    );
  }
}

UnitsAdd.propTypes = {
  params: PropTypes.object,
  createUnit: PropTypes.func,
  status: PropTypes.number,
  defaultSchool: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  status: selectStatus(),
  defaultSchool: selectDefaultSchool(),
});

function mapDispatchToProps(dispatch) {
  return {
    createUnit: (schoolID, courseID, formValues) => dispatch(createUnit(schoolID, courseID, formValues)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitsAdd);

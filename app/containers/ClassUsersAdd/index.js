import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { REQUEST_STATUS } from 'global-constants';
import { createStructuredSelector } from 'reselect';
import ViewDialog from '../../components/ViewDialog';
import ViewDialogHeader from '../../components/ViewDialogHeader';

export class ClassUsersAdd extends React.PureComponent {
  componentWillReceiveProps(nextProps) {
    if (this.props.status === REQUEST_STATUS.REQUESTING && nextProps.status === REQUEST_STATUS.SUCCEEDED) {
      this.closeForm();
    }
  }

  closeForm() {
    browserHistory.push(`/classes/${this.props.params.classID}`);
  }

  render() {
    return (
      <ViewDialog header={<ViewDialogHeader title="Add user to this class" />}>
      </ViewDialog>
    );
  }
}

ClassUsersAdd.propTypes = {
  params: PropTypes.object,
  status: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassUsersAdd);

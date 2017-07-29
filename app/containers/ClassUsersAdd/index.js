import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { browserHistory } from 'react-router';
import { REQUEST_STATUS } from 'global-constants';
import Immutable from 'immutable';
import { createStructuredSelector } from 'reselect';
import ViewDialog from '../../components/ViewDialog';
import ViewDialogHeader from '../../components/ViewDialogHeader';
import ViewUsersSelector from '../../components/ViewUsersSelector';
import ViewBottomToolbar from '../../components/ViewBottomToolbar';
import ButtonFlat from '../../components/ButtonFlat';
import {
  getNotStudentsOfClass,
  handleSelectUser,
  postAddUsersToClass,
} from './actions';
import {
  selectNotClassStudents,
  selectSelectedUserIds,
  selectStatus,
} from './selectors';
import {
  selectDefaultSchool,
} from '../Dashboard/selectors';

export class ClassUsersAdd extends React.PureComponent {
  componentWillMount() {
    this.props.getNotStudentsOfClass(this.props.defaultSchool, this.props.params.classID);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.status === REQUEST_STATUS.REQUESTING && nextProps.status === REQUEST_STATUS.SUCCEEDED) {
      this.props.getNotStudentsOfClass(this.props.defaultSchool, this.props.params.classID);
    }
  }

  closeForm() {
    browserHistory.push(`/classes/${this.props.params.classID}`);
    window.location.reload();
  }

  render() {
    return (
      <ViewDialog header={<ViewDialogHeader title="Add user to this class" />}>
        <ViewUsersSelector
          users={this.props.notClassStudents}
          handleSelectUser={this.props.handleSelectUser}
        />
        <ViewBottomToolbar>
          <ButtonFlat label="Cancel" onClick={() => this.closeForm()} />
          <Spacer />
          <ButtonFlat
            label="Add students"
            highlighted
            type="button"
            disabled={this.props.selectedUserIds.size === 0}
            onClick={() => this.props.postAddUsersToClass(this.props.defaultSchool, this.props.params.classID, this.props.selectedUserIds)}
          />
        </ViewBottomToolbar>
      </ViewDialog>
    );
  }
}

const Spacer = styled.span`
  width: 12px;
`;

ClassUsersAdd.propTypes = {
  params: PropTypes.object,
  status: PropTypes.number,
  getNotStudentsOfClass: PropTypes.func,
  handleSelectUser: PropTypes.func,
  notClassStudents: PropTypes.instanceOf(Immutable.List),
  selectedUserIds: PropTypes.instanceOf(Immutable.List),
  postAddUsersToClass: PropTypes.func,
  defaultSchool: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  notClassStudents: selectNotClassStudents(),
  selectedUserIds: selectSelectedUserIds(),
  status: selectStatus(),
  defaultSchool: selectDefaultSchool(),
});

function mapDispatchToProps(dispatch) {
  return {
    getNotStudentsOfClass: (schoolID, classID) => dispatch(getNotStudentsOfClass(schoolID, classID)),
    postAddUsersToClass: (schoolID, classID, userIDs) => dispatch(postAddUsersToClass(schoolID, classID, userIDs)),
    handleSelectUser: (indexes) => dispatch(handleSelectUser(indexes)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassUsersAdd);

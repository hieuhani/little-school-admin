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
import ViewPagination from '../../components/ViewPagination';
import FormSearchUser from '../../components/FormSearchUser';
import {
  getNotStudentsOfClass,
  handleSelectUser,
  postAddUsersToClass,
  changePage,
  findNotStudentOfClass,
} from './actions';
import {
  selectNotClassStudents,
  selectSelectedUserIds,
  selectStatus,
  selectCurrentPage,
  selectCount,
  selectSize,
  selectFindMode,
} from './selectors';
import {
  selectDefaultSchool,
} from '../Dashboard/selectors';

export class ClassUsersAdd extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleSearchUser = (username) => {
      if (username) {
        this.props.findNotStudentOfClass(this.props.defaultSchool, this.props.params.classID, username);
      } else {
        this.props.getNotStudentsOfClass(this.props.defaultSchool, this.props.params.classID, this.props.currentPage, this.props.size);
      }
    };
  }
  componentWillMount() {
    this.props.getNotStudentsOfClass(this.props.defaultSchool, this.props.params.classID, this.props.currentPage, this.props.size);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.status === REQUEST_STATUS.REQUESTING && nextProps.status === REQUEST_STATUS.SUCCEEDED) {
      this.props.getNotStudentsOfClass(this.props.defaultSchool, this.props.params.classID, this.props.currentPage, this.props.size);
    }

    if (nextProps.currentPage !== this.props.currentPage && nextProps.findMode !== 1) {
      this.props.getNotStudentsOfClass(this.props.defaultSchool, this.props.params.classID, nextProps.currentPage, this.props.size);
    }
  }

  closeForm() {
    browserHistory.push(`/classes/${this.props.params.classID}`);
    window.location.reload();
  }

  render() {
    return (
      <ViewDialog header={<ViewDialogHeader title="Add user to this class" />}>
        <FormSearchUser onSubmit={(values) => this.handleSearchUser(values.get('username'))} />
        <ViewUsersSelector
          users={this.props.notClassStudents}
          handleSelectUser={this.props.handleSelectUser}
        />
        <ViewPagination
          currentPage={this.props.currentPage}
          size={this.props.size}
          count={this.props.count}
          handleSelectPage={this.props.changePage}
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
  findNotStudentOfClass: PropTypes.func,
  handleSelectUser: PropTypes.func,
  notClassStudents: PropTypes.instanceOf(Immutable.List),
  selectedUserIds: PropTypes.instanceOf(Immutable.List),
  postAddUsersToClass: PropTypes.func,
  defaultSchool: PropTypes.string,
  changePage: PropTypes.func,
  currentPage: PropTypes.number,
  size: PropTypes.number,
  count: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  notClassStudents: selectNotClassStudents(),
  selectedUserIds: selectSelectedUserIds(),
  status: selectStatus(),
  defaultSchool: selectDefaultSchool(),
  currentPage: selectCurrentPage(),
  count: selectCount(),
  size: selectSize(),
  findMode: selectFindMode(),
});

function mapDispatchToProps(dispatch) {
  return {
    getNotStudentsOfClass: (schoolID, classID, currentPage, size) => dispatch(getNotStudentsOfClass(schoolID, classID, currentPage, size)),
    findNotStudentOfClass: (schoolID, classID, username) => dispatch(findNotStudentOfClass(schoolID, classID, username)),
    postAddUsersToClass: (schoolID, classID, userIDs) => dispatch(postAddUsersToClass(schoolID, classID, userIDs)),
    handleSelectUser: (indexes) => dispatch(handleSelectUser(indexes)),
    changePage: (page) => dispatch(changePage(page)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassUsersAdd);

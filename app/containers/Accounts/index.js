import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { REQUEST_STATUS } from 'global-constants';
import { createStructuredSelector } from 'reselect';
import ViewAccountsHeader from '../../components/ViewAccountsHeader';
import ViewTableAccounts from '../../components/ViewTableAccounts';
import ViewPagination from '../../components/ViewPagination';
import ViewStudentDetails from '../../components/ViewStudentDetails';
import {
  getAccounts,
  changePage,
  handleSearchUser,
  clearStudentDetails,
} from './actions';
import {
  selectCurrentPage,
  selectCount,
  selectUsers,
  selectSize,
  selectFindStudentStatus,
  selectStudentDetail,
} from './selectors';

export class Accounts extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.getAccounts(this.props.currentPage, this.props.size);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentPage !== this.props.currentPage) {
      this.props.getAccounts(nextProps.currentPage, this.props.size);
    }
  }

  render() {
    return (
      <div>
        <ViewAccountsHeader handleSearchUser={this.props.handleSearchUser} findStudentStatus={this.props.findStudentStatus} />
        <ViewTableAccounts accounts={this.props.users} />
        <ViewPagination
          currentPage={this.props.currentPage}
          size={this.props.size}
          count={this.props.count}
          handleSelectPage={this.props.changePage}
        />
        {this.props.children}
        {(this.props.findStudentStatus === REQUEST_STATUS.SUCCEEDED && this.props.studentDetail !== null) && <ViewStudentDetails student={this.props.studentDetail} closeModal={this.props.clearStudentDetails} />}
      </div>
    );
  }
}

Accounts.propTypes = {
  children: PropTypes.node,
  getAccounts: PropTypes.func,
  changePage: PropTypes.func,
  handleSearchUser: PropTypes.func,
  clearStudentDetails: PropTypes.func,
  currentPage: PropTypes.number,
  size: PropTypes.number,
  count: PropTypes.number,
  findStudentStatus: PropTypes.number,
  users: PropTypes.instanceOf(Immutable.List),
  studentDetail: PropTypes.instanceOf(Immutable.Map),
};

const mapStateToProps = createStructuredSelector({
  currentPage: selectCurrentPage(),
  count: selectCount(),
  users: selectUsers(),
  size: selectSize(),
  findStudentStatus: selectFindStudentStatus(),
  studentDetail: selectStudentDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    getAccounts: (page, size) => dispatch(getAccounts(page, size)),
    changePage: (page) => dispatch(changePage(page)),
    handleSearchUser: (username) => dispatch(handleSearchUser(username)),
    clearStudentDetails: () => dispatch(clearStudentDetails()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);

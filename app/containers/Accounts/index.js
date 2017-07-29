import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { createStructuredSelector } from 'reselect';
import ViewAccountsHeader from '../../components/ViewAccountsHeader';
import ViewTableAccounts from '../../components/ViewTableAccounts';
import ViewPagination from '../../components/ViewPagination';
import {
  getAccounts,
  changePage,
} from './actions';
import {
  selectCurrentPage,
  selectCount,
  selectUsers,
  selectSize,
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
        <ViewAccountsHeader />
        <ViewTableAccounts accounts={this.props.users} />
        <ViewPagination
          currentPage={this.props.currentPage}
          size={this.props.size}
          count={this.props.count}
          handleSelectPage={this.props.changePage}
        />
        {this.props.children}
      </div>
    );
  }
}

Accounts.propTypes = {
  children: PropTypes.node,
  getAccounts: PropTypes.func,
  changePage: PropTypes.func,
  currentPage: PropTypes.number,
  size: PropTypes.number,
  count: PropTypes.number,
  users: PropTypes.instanceOf(Immutable.List),
};

const mapStateToProps = createStructuredSelector({
  currentPage: selectCurrentPage(),
  count: selectCount(),
  users: selectUsers(),
  size: selectSize(),
});

function mapDispatchToProps(dispatch) {
  return {
    getAccounts: (page, size) => dispatch(getAccounts(page, size)),
    changePage: (page) => dispatch(changePage(page)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);

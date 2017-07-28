import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ViewAccountsHeader from '../../components/ViewAccountsHeader';

export class Accounts extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ViewAccountsHeader />
        {this.props.children}
      </div>
    );
  }
}

Accounts.propTypes = {
  children: PropTypes.node,
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import NavigationBar from '../NavigationBar';
import Sidebar from '../Sidebar';
import ViewBreadcrumb from '../../components/ViewBreadcrumb';
import './styles.scss';

export class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="dashboard">
        <NavigationBar />
        <div className="wrapper">
          <Sidebar pathname={this.props.pathname} />
          <section className="content">
            <ViewBreadcrumb />
            <div className="main">
              {this.props.children}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.node,
  pathname: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

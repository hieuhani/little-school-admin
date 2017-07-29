import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import NavigationBar from '../NavigationBar';
import Sidebar from '../Sidebar';
import ViewBreadcrumb from '../../components/ViewBreadcrumb';
import './styles.scss';

import SchoolSelector from '../SchoolSelector';
import {
  checkDefaultSchool,
} from './actions';
import {
  selectDefaultSchool,
} from './selectors';

export class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.checkDefaultSchool();
  }

  render() {
    if (this.props.defaultSchool === undefined) return null;
    if (this.props.defaultSchool === null) {
      return (
        <SchoolSelector />
      );
    }
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
  defaultSchool: PropTypes.string,
  checkDefaultSchool: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  defaultSchool: selectDefaultSchool(),
});

function mapDispatchToProps(dispatch) {
  return {
    checkDefaultSchool: () => (dispatch(checkDefaultSchool())),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

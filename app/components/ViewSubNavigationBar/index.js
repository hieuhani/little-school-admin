import React from 'react';
import './styles.scss';

function ViewSubNavigationBar() {
  return (
    <nav className="view-sub-navigation-bar">
      <div className="user">
        <div className="info">
          <h3 className="name">David Moye</h3>
          <p className="address">46 Kim Nguu, Hoang Mai, Ha Noi</p>
        </div>
      </div>
      <div className="breadcrumb-bar">
        <h1 className="title">Courses</h1>
        <p className="description">
          School courses management page
        </p>
      </div>
    </nav>
  );
}

ViewSubNavigationBar.propTypes = {

};

export default ViewSubNavigationBar;

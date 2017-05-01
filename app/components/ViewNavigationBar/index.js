import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { white } from 'material-ui/styles/colors';

import './styles.scss';

const styles = {
  navIcon: {
    width: 59,
    height: 59,
    padding: 18,
  },
};

function ViewNavigationBar() {
  return (
    <div className="view-navigation-bar">
      <nav className="navigation-bar fixed-top">
        <a className="navbar-brand" href="#@">Little School</a>
        <a href="#school" className="school">
          <div className="info">
            <h3 className="name">Vin School</h3>
            <p className="address">46 Kim Nguu, Hoang Mai, Ha Noi</p>
          </div>
        </a>
        <ul className="nav nav-pills right-items">
          <li className="nav-item">
            <IconButton tooltip="Home" style={styles.navIcon}>
              <FontIcon className="material-icons" color={white}>home</FontIcon>
            </IconButton>
          </li>
          <li className="nav-item">
            <IconButton tooltip="Notifications" style={styles.navIcon}>
              <FontIcon className="material-icons" color={white}>notifications_none</FontIcon>
            </IconButton>
          </li>
        </ul>
      </nav>
    </div>
  );
}

ViewNavigationBar.propTypes = {

};

export default ViewNavigationBar;

import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import './styles.scss';

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
            <a className="nav-link" href="#About">
              <FontIcon className="material-icons">home</FontIcon>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">
              <FontIcon className="material-icons">notifications_none</FontIcon>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

ViewNavigationBar.propTypes = {

};

export default ViewNavigationBar;

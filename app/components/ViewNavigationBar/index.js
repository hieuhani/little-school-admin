import React from 'react';
// import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import { white } from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import './styles.scss';

const styles = {
  // navIcon: {
  //   width: 59,
  //   height: 59,
  //   padding: 18,
  // },
  menuLink: {
    textDecoration: 'none',
  },
};

function ViewNavigationBar(props) {
  return (
    <div className="view-navigation-bar">
      <nav className="navigation-bar fixed-top">
        <div className="navbar-brand">
          {props.school.get('name')}
        </div>
        <ul className="nav nav-pills right-items">
          <li className="nav-item">
            <IconMenu
              className="icon-menu"
              iconButtonElement={<IconButton><MoreVertIcon color={white} /></IconButton>}
              anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
              <Link to="/new_school" style={styles.menuLink}>
                <MenuItem
                  primaryText="Create new school"
                />
              </Link>
              <MenuItem
                primaryText="Change school to manage"
                onClick={props.handleChangeSchool}
              />
              <MenuItem
                primaryText="Sign out"
                onClick={props.handleUserSignOut}
              />
            </IconMenu>
          </li>
        </ul>
      </nav>
    </div>
  );
}

ViewNavigationBar.propTypes = {
  handleUserSignOut: PropTypes.func,
  handleChangeSchool: PropTypes.func,
  school: PropTypes.instanceOf(Immutable.Map),
};

export default ViewNavigationBar;

/**
 <a href="#school" className="school">
  <div className="info">
    <h3 className="name">Vin School</h3>
    <p className="address">46 Kim Nguu, Hoang Mai, Ha Noi</p>
  </div>
</a>
 */

 /**
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
  */

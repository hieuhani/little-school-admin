/**
*
* ViewSidebar
*
*/

import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Assessment from 'material-ui/svg-icons/action/assessment';
import SupervisorAccount from 'material-ui/svg-icons/action/supervisor-account';
import GroupAdd from 'material-ui/svg-icons/social/group-add';
import School from 'material-ui/svg-icons/social/school';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';
import Settings from 'material-ui/svg-icons/action/settings';
import Share from 'material-ui/svg-icons/social/share';
import ThumbsUpDown from 'material-ui/svg-icons/action/thumbs-up-down';
import LibraryBooks from 'material-ui/svg-icons/av/library-books';

import { Link } from 'react-router';
import './styles.scss';

function ViewSidebar() {
  return (
    <aside className="view-sidebar">
      <div className="top-spacing" />
      <div className="user">
        <img className="avatar" src="http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46ad551392.png" role="presentation" />
        <div className="info">
          <h3 className="name">David Moye</h3>
          <p className="title">School Manager</p>
        </div>
      </div>
      <div className="menu-items">
        <Menu width="240px" autoWidth={false}>
          <Subheader>Resources and students</Subheader>
          <Link to="/courses">
            <MenuItem primaryText="Courses" leftIcon={<LibraryBooks />} />
          </Link>
          <Link to="/">
            <MenuItem primaryText="Classes" leftIcon={<School />} />
          </Link>
          <Link to="/">
            <MenuItem primaryText="Students" leftIcon={<GroupAdd />} />
          </Link>
          <Link to="/">
            <MenuItem primaryText="Test Bank" leftIcon={<Assessment />} />
          </Link>
          <Divider />
          <Subheader>Internal school</Subheader>
          <Link to="/">
            <MenuItem primaryText="Staffs" leftIcon={<SupervisorAccount />} />
          </Link>
          <Link to="/">
            <MenuItem primaryText="Announcements" leftIcon={<Share />} />
          </Link>
          <Link to="/">
            <MenuItem primaryText="Feedback" leftIcon={<ThumbsUpDown />} />
          </Link>
          <Link to="/">
            <MenuItem primaryText="Settings" leftIcon={<Settings />} />
          </Link>
          <Divider />
          <Subheader>Statistics</Subheader>
          <Link to="/">
            <MenuItem primaryText="Analytics" leftIcon={<TrendingUp />} />
          </Link>
        </Menu>
      </div>
    </aside>
  );
}

ViewSidebar.propTypes = {

};

export default ViewSidebar;

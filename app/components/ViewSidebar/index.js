import React from 'react';
import PropTypes from 'prop-types';
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
import { grey300 } from 'material-ui/styles/colors';

import './styles.scss';

const sidebarItems = [
  {
    group: 'Resources and students',
  },
  {
    path: '/courses',
    text: 'Courses',
    icon: <LibraryBooks />,
  },
  {
    path: '/classes',
    text: 'Classes',
    icon: <School />,
  },
  {
    path: '/#',
    text: 'Students',
    icon: <GroupAdd />,
  },
  {
    path: '/#',
    text: 'Test Bank',
    icon: <Assessment />,
  },
  {
    group: 'Internal school',
  },
  {
    path: '/#',
    text: 'Staffs',
    icon: <SupervisorAccount />,
  },
  {
    path: '/#',
    text: 'Announcements',
    icon: <Share />,
  },
  {
    path: '/#',
    text: 'Feedback',
    icon: <ThumbsUpDown />,
  },
  {
    path: '/#',
    text: 'Settings',
    icon: <Settings />,
  },
  {
    group: 'Statistics',
  },
  {
    path: '/analytics',
    text: 'Analytics',
    icon: <TrendingUp />,
  },
];

function ViewSidebar(props) {
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
          {sidebarItems.map((item, idx) => {
            let node;
            if (item.group) {
              if (idx > 0) {
                node = (
                  <div>
                    <Divider />
                    <Subheader>{item.group}</Subheader>
                  </div>
                );
              } else {
                node = <Subheader>{item.group}</Subheader>;
              }
            } else {
              node = (
                <Link to={item.path}>
                  <MenuItem primaryText={item.text} leftIcon={item.icon} style={props.pathname.startsWith(item.path) ? styles.activeMenuItem : styles.EMPTY_STYLE} />
                </Link>
              );
            }
            return (
              <div key={idx}>
                {node}
              </div>
            );
          })}
        </Menu>
      </div>
    </aside>
  );
}

const styles = {
  EMPTY_STYLE: {},
  activeMenuItem: {
    backgroundColor: grey300,
  },
};

ViewSidebar.propTypes = {
  pathname: PropTypes.string,
};

export default ViewSidebar;

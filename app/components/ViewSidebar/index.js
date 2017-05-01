/**
*
* ViewSidebar
*
*/

import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';

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
          <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
          <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
          <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
          <Divider />
          <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
          <MenuItem primaryText="Download" leftIcon={<Download />} />
          <Divider />
          <MenuItem primaryText="Remove" leftIcon={<Delete />} />
        </Menu>
      </div>
    </aside>
  );
}

ViewSidebar.propTypes = {

};

export default ViewSidebar;

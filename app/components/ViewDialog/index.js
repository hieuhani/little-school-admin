

import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import './styles.scss';


function ViewDialog(props) {
  return (
    <Dialog
      modal
      open
    >
      {props.children}
    </Dialog>
  );
}

ViewDialog.propTypes = {
  children: PropTypes.node,
};

export default ViewDialog;

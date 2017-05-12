import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import { grey50 } from 'material-ui/styles/colors';


function ViewDialog(props) {
  return (
    <Dialog
      modal
      open
      title={props.header}
      bodyStyle={styles.body}
    >
      {props.children}
    </Dialog>
  );
}

const styles = {
  body: {
    padding: 24,
    backgroundColor: grey50,
  },
};

ViewDialog.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
};

export default ViewDialog;
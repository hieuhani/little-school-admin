import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import { grey50 } from 'material-ui/styles/colors';


function ViewDialog(props) {
  return (
    <Dialog
      modal
      open
      title={props.header}
      bodyStyle={styles.body}
      autoScrollBodyContent
      contentStyle={styles.content}
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
  content: {
    transform: 'none',
  },
};

ViewDialog.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
};

export default ViewDialog;

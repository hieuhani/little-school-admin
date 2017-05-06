/**
*
* ViewIconTextField
*
*/

import React, { PropTypes } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { minBlack } from 'material-ui/styles/colors';


function ViewIconTextField({ icon, text }) {
  return (
    <div className="view-icon-text-field">
      <FontIcon
        className="material-icons"
        color={minBlack}
        style={styles.icon}
      >
        {icon}
      </FontIcon>{text}
    </div>
  );
}

const styles = {
  icon: {
    top: '5px',
  },
};

ViewIconTextField.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ViewIconTextField;

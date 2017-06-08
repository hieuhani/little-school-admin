import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import { green500, green600 } from 'material-ui/styles/colors';
const styles = (props) => ({
  button: {
    color: props.highlighted ? 'white' : 'rgba(0, 0, 0, 0.54)',
  },
});

const ButtonFlat = (props) => (
  <FlatButton
    onTouchTap={props.onClick}
    type={props.type}
    disabled={props.disabled}
    label={props.label}
    style={styles(props).button}
    backgroundColor={props.highlighted ? green500 : 'transparent'}
    hoverColor={props.highlighted ? green600 : 'rgba(153, 153, 153, 0.2)'}
    icon={props.loading ? <CircularProgress size={20} /> : null}
    labelPosition="before"
  />
);

ButtonFlat.propTypes = {
  highlighted: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};

ButtonFlat.defaultProps = {
  loading: false,
};

export default ButtonFlat;

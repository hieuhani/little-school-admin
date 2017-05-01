/**
*
* ViewLogin
*
*/

import React, { PropTypes } from 'react';
import FormLogin from '../FormLogin';
import './styles.scss';

const introImage = require('./intro-image.png');
function ViewLogin(props) {
  return (
    <div className="view-login">
      <div className="wrapper row">
        <div className="col-md-6 login-form">
          <h2 className="logo" />
          <FormLogin onSubmit={props.onLoginFormSubmit} />
        </div>
        <div className="col-md-6 intro">
          <img src={introImage} role="presentation" />
          <span className="bubble-image" />
        </div>
      </div>
    </div>
  );
}

ViewLogin.propTypes = {
  onLoginFormSubmit: PropTypes.func.isRequired,
};

export default ViewLogin;

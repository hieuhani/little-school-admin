/**
*
* ViewLogin
*
*/

import React from 'react';
import FormLogin from '../FormLogin';
import './styles.scss';

const introImage = require('./intro-image.png');
function ViewLogin() {
  return (
    <div className="view-login">
      <div className="wrapper row">
        <div className="col-md-6 login-form">
          <h2 className="logo" />
          <FormLogin />
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

};

export default ViewLogin;

/**
*
* ViewDialogHeader
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import ModalTitle from './ModalTitle';

function ViewDialogHeader(props) {
  return (
    <Wrapper>
      <ModalTitle>{props.title}</ModalTitle>
    </Wrapper>
  );
}

ViewDialogHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ViewDialogHeader;

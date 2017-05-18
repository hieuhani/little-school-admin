import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 32px;
`;

const FloatRight = styled.div`
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  align-content: center;
  max-width: 100%;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
`;

const ViewBottomToolbar = (props) => (
  <Wrapper>
    <FloatRight>
      {props.children}
    </FloatRight>
  </Wrapper>
);

ViewBottomToolbar.propTypes = {
  children: PropTypes.node,
};

export default ViewBottomToolbar;

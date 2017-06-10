import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { green600 } from 'material-ui/styles/colors';

const ChartTitleWrapper = styled.div`
  text-align: center;
  color: ${green600};
  h3 {
    font-size: 1.5rem;
  }
`;

function ViewChartTitle({ title, subTitle }) {
  return (
    <ChartTitleWrapper>
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </ChartTitleWrapper>
  );
}

ViewChartTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default ViewChartTitle;

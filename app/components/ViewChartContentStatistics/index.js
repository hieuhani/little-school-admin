import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import ViewStatisticUsage from '../ViewStatisticUsage';

const RowWrapper = styled(Row)`
  margin-top: 20px;
`;

const ColWrapper = styled(Col)`
  display: flex;
  flex-wrap: wrap;
`;

const Content = styled.div`
  width: 100%;
  background-color: #EDECEC;
`;

function ViewChartContentStatistics() {
  return (
    <RowWrapper>
      <ColWrapper sm="6" md="3">
        <ViewStatisticUsage />
      </ColWrapper>
      <ColWrapper sm="6" md="3">
        <Content>
        </Content>
      </ColWrapper>
      <ColWrapper sm="6" md="3">
        <Content>
        </Content>
      </ColWrapper>
      <ColWrapper sm="6" md="3">
        <Content>
        </Content>
      </ColWrapper>
    </RowWrapper>
  );
}

ViewChartContentStatistics.propTypes = {

};

export default ViewChartContentStatistics;

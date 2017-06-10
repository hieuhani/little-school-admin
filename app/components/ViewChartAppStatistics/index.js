import React from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

import ViewStatisticMetric from '../ViewStatisticMetric';

const Wrapper = styled.div`
  margin-top: 20px;
`;

function ViewChartAppStatistics() {
  return (
    <Wrapper>
      <Row>
        <Col>
          <ViewStatisticMetric theme="cyan" />
        </Col>
        <Col>
          <ViewStatisticMetric theme="green" />
        </Col>
        <Col>
          <ViewStatisticMetric theme="orange" />
        </Col>
        <Col>
          <ViewStatisticMetric theme="grey" />
        </Col>
      </Row>
    </Wrapper>
  );
}

ViewChartAppStatistics.propTypes = {

};

export default ViewChartAppStatistics;

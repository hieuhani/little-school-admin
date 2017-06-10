import React from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

import ViewStatisticMetric from '../ViewStatisticMetric';

const Wrapper = styled.div`
  margin-top: 20px;
`;

const metrics = [
  {
    type: 'appTraffic',
    theme: 'cyan',
    counter: '983,456',
    chartType: 'bar',
    data: [12, 19, 3, 5, 2, 3],
  },
  {
    type: '1',
    theme: 'green',
    counter: '143,656',
    chartType: 'bar',
    data: [19, 12, 7, 9, 2, 3],
  },
  {
    type: '2',
    theme: 'orange',
    counter: '283,456',
    chartType: 'line',
    data: [22, 49, 23, 25, 20, 13],
  },
  {
    type: '3',
    theme: 'grey',
    counter: '83,456',
    chartType: 'line',
    data: [12, 19, 3, 5, 2, 3],
  },
];

function ViewChartAppStatistics() {
  return (
    <Wrapper>
      <Row>
        {metrics.map((metric) => (
          <Col key={metric.type}>
            <ViewStatisticMetric metric={metric} />
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
}

ViewChartAppStatistics.propTypes = {

};

export default ViewChartAppStatistics;

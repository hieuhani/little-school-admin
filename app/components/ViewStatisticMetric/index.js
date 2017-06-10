import React from 'react';
import PropTypes from 'prop-types';
import { Line, Bar } from 'react-chartjs';
import {
  Wrapper,
  Chart,
  Counter,
  ChartWrapper,
} from './styles';
import themes from './themes';

const chartOptions = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      display: false,
    }],
    yAxes: [{
      display: false,
    }],
  },
};

const generateChartData = ({ data, chartType }) => ({
  labels: ['', '', '', '', '', ''],
  datasets: [{
    data,
    borderWidth: 2,
    lineTension: 0,
    borderColor: chartType === 'bar' ? 'transparent' : 'white',
    backgroundColor: chartType === 'line' ? 'transparent' : 'white',
    pointBackgroundColor: 'transparent',
    pointBorderColor: 'transparent',
  }],
});


function ViewStatisticMetric({ metric: { theme, counter, chartType, data } }) {
  let node;
  switch (chartType) {
    case 'bar':
      node = <Bar width="100" data={generateChartData({ data, chartType })} options={chartOptions} />;
      break;
    case 'line':
      node = <Line width="100" data={generateChartData({ data, chartType })} options={chartOptions} />;
      break;
    default:
      break;
  }
  return (
    <Wrapper>
      <ChartWrapper color={themes[theme].dark}>
        <Chart>
          {node}
        </Chart>
      </ChartWrapper>
      <Counter color={themes[theme].light}>
        <small>App Traffics</small>
        <h2>{counter}</h2>
      </Counter>
    </Wrapper>
  );
}

ViewStatisticMetric.propTypes = {
  metric: PropTypes.object,
};

export default ViewStatisticMetric;

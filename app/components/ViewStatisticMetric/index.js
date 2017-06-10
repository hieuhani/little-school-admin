import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs';
import {
  Wrapper,
  Chart,
  Counter,
  ChartWrapper,
} from './styles';
import themes from './themes';

const chartData = {
  labels: ['', '', '', '', '', ''],
  datasets: [{
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 2,
    lineTension: 0,
    borderColor: '#FFF',
    backgroundColor: 'transparent',
    pointBackgroundColor: 'transparent',
    pointBorderColor: 'transparent',
  }],
};
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


function ViewStatisticMetric({ theme }) {
  return (
    <Wrapper>
      <ChartWrapper color={themes[theme].dark}>
        <Chart>
          <Line width="100" data={chartData} options={chartOptions} />
        </Chart>
      </ChartWrapper>
      <Counter color={themes[theme].light}>
        <small>App Traffics</small>
        <h2>983,456</h2>
      </Counter>
    </Wrapper>
  );
}

ViewStatisticMetric.propTypes = {
  theme: PropTypes.string,
};

export default ViewStatisticMetric;

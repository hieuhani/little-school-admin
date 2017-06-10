import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs';

const Wrapper = styled.div`
  width: 100%;
  background-color: #009688;
`;

const Header = styled.div`
  padding: 20px;
  background-color: #008376;
`;

const Attributes = styled.div`
  color: #fff;
`;

const Attribute = styled.div`
  padding: 10px 20px;
  h3 {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 0;
  }
`;

const SubHeader = styled.div`
  background-color: #007064;
  color: rgba(255, 255, 255, 0.9);
  padding: 12px 20px;
  font-weight: 300;

`;

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

const chartData = {
  labels: ['', '', '', '', '', ''],
  datasets: [{
    data: [22, 49, 23, 25, 20, 13],
    borderWidth: 2,
    lineTension: 0,
    borderColor: 'white',
    backgroundColor: 'transparent',
    pointBackgroundColor: 'transparent',
    pointBorderColor: 'transparent',
  }],
};

function ViewStatisticUsage() {
  return (
    <Wrapper>
      <Header>
        <Line data={chartData} options={chartOptions} />
      </Header>
      <SubHeader>
        For the past 30 days
      </SubHeader>
      <Attributes>
        <Attribute>
          <small>New students</small>
          <h3>349</h3>
        </Attribute>
        <Attribute>
          <small>Total play times</small>
          <h3>2349</h3>
        </Attribute>
      </Attributes>
    </Wrapper>
  );
}

ViewStatisticUsage.propTypes = {

};

export default ViewStatisticUsage;

import React from 'react';
import { Bar } from 'react-chartjs';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const chartData = () => ({
  labels: months,
  datasets: [
    {
      label: 'Tổng số học sinh',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(159, 32, 64, 0.2)',
        'rgba(67, 12, 12, 0.2)',
        'rgba(23, 122, 23, 0.2)',
        'rgba(203, 123, 80, 0.2)',
        'rgba(1, 31, 102, 0.2)',
        'rgba(255, 14, 10, 0.2)',
        'rgba(90, 98, 6, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(67, 12, 12, 1)',
        'rgba(23, 122, 23, 1)',
        'rgba(203, 123, 80, 1)',
        'rgba(1, 31, 102, 1)',
        'rgba(255, 14, 10, 1)',
        'rgba(90, 98, 6, 1)',
      ],
      borderWidth: 1,
      data: months.map((value, index) => (index + 19)),
    },
  ],
});

const chartOptions = {
  scales: {
    xAxes: [{
      stacked: true,
    }],
    yAxes: [{
      stacked: true,
    }],
  },
};

function ViewChartTotalUsers() {
  return (
    <Bar data={chartData([])} options={chartOptions} />
  );
}

ViewChartTotalUsers.propTypes = {

};

export default ViewChartTotalUsers;

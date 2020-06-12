import React from 'react';
import { sortViews } from '../sortHelpers';
import { Bar } from 'react-chartjs-2';

export default function ViewsPlot({ data }) {
  const topFive = [...data].sort(sortViews).slice(0, 5);
  console.log('top five', topFive);

  const barData = {
    labels: Array.from(topFive, item => item.Displayname),
    datasets: [
      {
        label: 'Number of Views',
        data: Array.from(topFive, item => item.Views),
        backgroundColor: [
          'rgba(46, 161, 23, 0.2)',
          'rgba(46, 161, 23, 0.2)',
          'rgba(46, 161, 23, 0.2)',
          'rgba(46, 161, 23, 0.2)',
          'rgba(46, 161, 23, 0.2)',
        ],
        borderColor: [
          'rgba(46, 161, 23)',
          'rgba(46, 161, 23)',
          'rgba(46, 161, 23)',
          'rgba(46, 161, 23)',
          'rgba(46, 161, 23)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div>
      <h1>Top Five Most Viewed Posts</h1>
      <Bar data={barData} options={options} />
    </div>
  );
}

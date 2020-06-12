import React from 'react';
import { sortInteractions } from '../sortHelpers';
import { Bar } from 'react-chartjs-2';

export default function InteractionsPlot({ data }) {
  const topFive = [...data].sort(sortInteractions).slice(0, 5);
  console.log('top five', topFive);

  const barData = {
    labels: Array.from(topFive, item => item.Displayname),
    datasets: [
      {
        label: 'Average Number of Interactions',
        data: Array.from(
          topFive,
          item => (item.Views + item.Comments + item.Likes) / 3
        ),
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
      <h3>Highest Average Interactions Per Post</h3>
      <Bar data={barData} options={options} />
    </div>
  );
}

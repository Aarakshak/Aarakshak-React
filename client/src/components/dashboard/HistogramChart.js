import React from 'react';
import { Bar } from 'react-chartjs-2';

const HistogramChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Histogram',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: data.values,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: false, 
        ticks: {
          stepSize: 1, 
        },
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default HistogramChart;

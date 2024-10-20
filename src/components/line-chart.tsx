"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Legend,
  Title
);

const LineChart = () => {
  const chartData = {
    labels: ["April", "May", "June", "July","August", "September", "October"],
    datasets: [
      {
        data: [6700, 2300, 5600, 3400,3200,3800,3000],
        label: "total visitors",
        borderColor: "#1898A1",
        borderWidth: 3,
        tension:0.2,
      },
    ],
  };
  return (
    <div className="flex flex-wrap justify-center gap-6 p-8 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-4 flex-grow" style={{ flexBasis: '30%', height: '300px' }}>
        <Line data={chartData} ></Line>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex-grow" style={{ flexBasis: '30%', height: '300px' }}>
        <Line data={chartData}></Line>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex-grow" style={{ flexBasis: '30%', height: '300px' }}>
        <Line data={chartData}></Line>
      </div>
    </div>
  );
};

export default LineChart;

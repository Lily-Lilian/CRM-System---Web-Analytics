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

const LineChart = async({statistics}:any) => {
  const visitors = statistics.map((stat:any) => stat.unique_visitors);
  const bounceRate = statistics.map((stat:any) => stat.bounce_rate);
  const averageSession = statistics.map((stat:any) => stat.avg_session_duration);
  const dates = statistics.map((stat:any) => stat.date);

  const chartData = {
    labels: dates,
    datasets: [
      {
        data: visitors,
        label: "total visitors",
        borderColor: "#012B30",
        borderWidth: 3,
        tension:0.2,
      },
      {
        data: bounceRate,
        label: "bounce rate",
        borderColor: "#85EC68",
        borderWidth: 3,
        tension:0.2,
      },
      {
        data:  averageSession,
        label: "Average Session Duration",
        borderColor: "#198A1",
        borderWidth: 3,
        tension:0.2,
      },
    ],
  };
  return (
    <div className=" flex items-center justify-center gap-6 p-8 bg-gray-100">
      <div className="bg-white p-4 flex-grow mx-auto">
        <Line data={chartData}></Line>
      </div>
    </div>
  );
};

export default LineChart;

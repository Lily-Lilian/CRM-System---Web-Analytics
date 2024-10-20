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
import { format } from "date-fns";

ChartJS.register(
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Legend,
  Title
);

const LineChart = async ({ statistics }: any) => {
  const visitors = statistics.map((stat: any) => stat.unique_visitors);
  const bounceRate = statistics.map((stat: any) => stat.bounce_rate);
  const averageSession = statistics.map(
    (stat: any) => stat.avg_session_duration
  );
  const dates = statistics.map((stat: any) =>
    format(new Date(stat.date), "do-MMM")
  );

  const chartData = {
    labels: dates,
    datasets: [
      {
        data: visitors,
        label: "total visitors",
        borderColor: "#3498db",
        borderWidth: 3,
        tension: 0.2,
      },
      {
        data: bounceRate,
        label: "bounce rate",
        borderColor: "#f1948a",
        borderWidth: 3,
        tension: 0.2,
      },
      {
        data: averageSession,
        label: "Average Session Duration",
        borderColor: "#a569bd",
        borderWidth: 3,
        tension: 0.2,
      },
    ],
  };
  return (
    <div className="mx-auto">
      <div className="bg-white">
        <Line data={chartData}></Line>
      </div>
    </div>
  );
};

export default LineChart;

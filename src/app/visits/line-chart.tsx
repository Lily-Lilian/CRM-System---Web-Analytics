//@collapsed
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
  plugins,
  Tooltip,
} from "chart.js";
import { format } from "date-fns";

ChartJS.register(
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Legend,
  Tooltip,
  Title
);
// Define the type for statistics items
type Statistic = {
  unique_visitors: number;
  bounce_rate: number;
  avg_session_duration: number;
  date: string;
};

interface LineChartProps {
  statistics: Statistic[];
}

const LineChart = ({ statistics = [] }: LineChartProps) => {
  const visitors =
    statistics.length > 0 ? statistics.map((stat) => stat.unique_visitors) : [];
  const bounceRate =
    statistics.length > 0 ? statistics.map((stat) => stat.bounce_rate) : [];
  const averageSession =
    statistics.length > 0
      ? statistics.map((stat) => stat.avg_session_duration)
      : [];
  const dates =
    statistics.length > 0
      ? statistics.map((stat) => format(new Date(stat.date), "do-MMM"))
      : [];

  const chartData = {
    labels: dates,
    datasets: [
      {
        data: visitors,
        label: "Total Visitors",
        borderColor: "#3498db",
        borderWidth: 3,
        tension: 0.2,
      },
      {
        data: bounceRate,
        label: "Bounce Rate",
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
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  const bounceRates = {
    labels: dates,
    datasets: [
      {
        data: bounceRate,
        label: "Bounce Rate",
        borderColor: "#f1948a",
        borderWidth: 3,
        tension: 0.2,
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          enabled: true, // Make sure tooltips are enabled
          mode: "index", // Show tooltip when hovering anywhere along the X axis (for all datasets)
          intersect: false, // Ensure the tooltip shows even if not directly over a point
        },
      },
      interaction: {
        mode: "index", // Ensures tooltips appear when hovering anywhere on the X-axis
        intersect: false, // Avoid requiring direct intersection with a point
      },
    },
  };
  const users = {
    labels: dates,
    datasets: [
      {
        data: visitors,
        label: "Total Visitors",
        borderColor: "#3498db",
        borderWidth: 3,
        tension: 0.2,
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };
  const averageDuration = {
    labels: dates,
    datasets: [
      {
        data: averageSession,
        label: "Average Session Duration",
        borderColor: "#a569bd",
        borderWidth: 3,
        tension: 0.2,
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  return (
    <div className="mx-auto">
      {/*desktop*/}
      <div className="bg-white hidden md:block">
        <Line data={chartData}></Line>
      </div>
      {/*mobile*/}
      <div className="flex flex-col gap-8 visible md:hidden">
        <div className="bg-white">
          <Line data={bounceRates}></Line>
        </div>
        <div className="bg-white">
          <Line data={users}></Line>
        </div>
        <div className="bg-white">
          <Line data={averageDuration}></Line>
        </div>
      </div>
    </div>
  );
};

export default LineChart;

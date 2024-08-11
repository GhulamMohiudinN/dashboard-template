import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const Reports = () => {
  const verticalBarData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Current Year",
        data: [
          10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 8000,
          9000,
        ],
        backgroundColor: "rgba(128, 128, 128, 0.2)",
        borderColor: "rgba(128, 128, 128, 1)",
        borderWidth: 1,
      },
      {
        label: "Past Year",
        data: [
          9000, 8500, 7500, 6500, 5500, 4500, 3500, 2500, 1500, 500, 7500, 8500,
        ],
        backgroundColor: "rgba(64, 64, 64, 0.2)",
        borderColor: "rgba(64, 64, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const horizontalBarData = {
    labels: [
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Current Year",
        data: [7000, 6000, 9000, 8000, 5000, 4000, 7000, 6000, 9000, 10000],
        backgroundColor: "rgba(128, 128, 128, 0.2)",
        borderColor: "rgba(128, 128, 128, 1)",
        borderWidth: 1,
      },
      {
        label: "Past Year",
        data: [8000, 7000, 6000, 5000, 4000, 3000, 6000, 5000, 8000, 9000],
        backgroundColor: "rgba(64, 64, 64, 0.2)",
        borderColor: "rgba(64, 64, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const postsLineData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Current Year",
        data: [500, 600, 700, 800, 900, 700, 800, 700, 600, 500, 400, 300],
        fill: false,
        borderColor: "rgba(128, 128, 128, 1)",
        backgroundColor: "rgba(128, 128, 128, 0.2)",
        tension: 0.1,
      },
      {
        label: "Past Year",
        data: [400, 500, 600, 700, 800, 600, 700, 600, 500, 400, 300, 200],
        fill: false,
        borderColor: "rgba(64, 64, 64, 1)",
        backgroundColor: "rgba(64, 64, 64, 0.2)",
        tension: 0.1,
      },
    ],
  };

  const postsLineDataWithPoints = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Current Year",
        data: [
          400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500,
        ],
        fill: false,
        borderColor: "rgba(128, 128, 128, 1)",
        backgroundColor: "rgba(128, 128, 128, 0.2)",
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: "rgba(128, 128, 128, 1)",
      },
      {
        label: "Past Year",
        data: [300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400],
        fill: false,
        borderColor: "rgba(64, 64, 64, 1)",
        backgroundColor: "rgba(64, 64, 64, 0.2)",
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: "rgba(64, 64, 64, 1)",
      },
    ],
  };

  const horizontalBarOptions = {
    indexAxis: 'y', 
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <>
      <div className="reportpage">
        <div className="upper">
          <div className="left">
            <h1>Monthly Sales</h1>
            <div className="status-indicators">
              <div className="status-item">
                <span className="status-dot achieved"></span>
                Current Year
              </div>
              <div className="status-item">
                <span className="status-dot remaining"></span>
                Past Year
              </div>
            </div>
            <Bar
              data={verticalBarData}
              height={220}
            />
          </div>
          <div className="right">
            <h1>Monthly Posts</h1>
            <div className="status-indicators">
              <div className="status-item">
                <span className="status-dot achieved"></span>
                Current Year
              </div>
              <div className="status-item">
                <span className="status-dot remaining"></span>
                Past Year
              </div>
            </div>
            <Line
              data={postsLineData}
              height={220}
            />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <h1>Monthly Sales</h1>
            <div className="status-indicators">
              <div className="status-item">
                <span className="status-dot achieved"></span>
                Current Year
              </div>
              <div className="status-item">
                <span className="status-dot remaining"></span>
                Past Year
              </div>
            </div>
            <Bar
              data={horizontalBarData}
              options={horizontalBarOptions} 
              height={220}
            />
          </div>
          <div className="right">
            <h1>Monthly Posts</h1>
            <div className="status-indicators">
              <div className="status-item">
                <span className="status-dot achieved"></span>
                Current Year
              </div>
              <div className="status-item">
                <span className="status-dot remaining"></span>
                Past Year
              </div>
            </div>
            <Line
              data={postsLineDataWithPoints}
              height={220}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;

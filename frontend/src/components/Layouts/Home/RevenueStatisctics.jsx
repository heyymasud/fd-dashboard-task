import Chart from "react-apexcharts";
import { fetchRevenues } from "../../../services/revenue.service";
import { useEffect, useState } from "react";
const ProjectStatisctics = () => {
  const [revenues, setRevenues] = useState([]);
  const fetchData = async () => {
    const data = await fetchRevenues();
    setRevenues(data.data);
  };

  const total = revenues.map((revenue) => revenue.total);
  const month = revenues.map((revenue) => revenue.month);

  useEffect(() => {
    fetchData();
  }, []);


  const options = {
    stroke: {
      curve: "smooth",
      colors: ["#6366F1"],
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: month,
    },
    yaxis: {
      show: true,
      labels: {
        formatter: function (value) {
          return "$ " + value;
        },
      },
    },
  };

  const series = [
    {
      name: "Revenue",
      data: total,
    },
  ];

  return (
    <div className="line">
      <h1 className="text-xl font-bold">Revenue Statistics</h1>
      <Chart
        options={options}
        series={series}
        type="line"
        width="95%"
        height="400"
      />
    </div>
  );
};

export default ProjectStatisctics;

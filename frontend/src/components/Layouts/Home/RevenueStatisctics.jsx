import Chart from "react-apexcharts";
const ProjectStatisctics = ({ revenues }) => {
  const total = revenues.map((revenue) => revenue.total);
  const month = revenues.map((revenue) => revenue.month);

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

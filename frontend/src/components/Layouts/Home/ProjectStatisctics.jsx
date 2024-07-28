import Chart from "react-apexcharts";

const ProjectStatisctics = () => {
  const options = {
    stroke: {
      curve: "smooth",
      colors: ["#6366F1"], 
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: [
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
      data: [
        30000, 40000, 25000, 50000, 49000, 21000, 70000, 51000, 20000, 30000,
        40000, 25000,
      ],
    },
  ];

  return (
    <div className="line">
      <h1 className="text-xl font-bold">Revenue</h1>
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

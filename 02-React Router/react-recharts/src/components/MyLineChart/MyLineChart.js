import React from "react";
import { LineChart, Line, YAxis, XAxis, Tooltip } from "recharts";

const MyLineChart = () => {
  const data = [
    {
      name: "Supplier A",
      price: 1000,
      sales: 2400,
      amt: 2400,
    },
    {
      name: "Supplier B",
      price: 3000,
      sales: 1398,
      amt: 2210,
    },
    {
      name: "Supplier C",
      price: 2000,
      sales: 2800,
      amt: 2290,
    },
    {
      name: "Supplier D",
      price: 3780,
      sales: 1908,
      amt: 2000,
    },
    {
      name: "Supplier E",
      price: 1890,
      sales: 1800,
      amt: 2181,
    },
    {
      name: "Supplier F",
      price: 2390,
      sales: 5800,
      amt: 2500,
    },
    {
      name: "Supplier G",
      price: 3490,
      sales: 1300,
      amt: 2100,
    },
  ];
  return (
    <LineChart width={800} height={500} data={data}>
      <Line dataKey={"price"} />
      <Line dataKey={"sales"} />
      <XAxis dataKey={"name"}></XAxis>
      <YAxis dataKey={"price"}></YAxis>
      <Tooltip></Tooltip>
    </LineChart>
  );
};

export default MyLineChart;

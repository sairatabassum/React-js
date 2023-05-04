import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, Tooltip, YAxis } from "recharts";

const SpecialChart = () => {
  const [phone, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;
        const phoneData = loadedData.map((phone) => {
          const parts = phone.slug.split("-");
          const ph = {
            name: parts[0],
            value: parseInt(parts[1]),
          };
          return ph;
        });
        setPhones(phoneData);
        console.log(phoneData);
      });
  }, []);
  return (
    <BarChart width={850} height={400} data={phone}>
      <Bar dataKey="value" fill="#ED2A26" />
      <XAxis dataKey={"name"}></XAxis>
      <YAxis></YAxis>
      <Tooltip></Tooltip>
    </BarChart>
  );
};

export default SpecialChart;

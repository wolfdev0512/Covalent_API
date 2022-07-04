import React from "react";
import { BarChart, Bar, XAxis, YAxis, Label } from "recharts";

const Chart: React.FC<{ data: Array<{ name: string; data: number }> }> = ({
  data,
}) => {
  return (
    <div>
      <BarChart width={1000} height={500} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="data" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Chart;

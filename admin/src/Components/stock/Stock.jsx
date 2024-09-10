import React, { useEffect, useState } from "react";
import { backend_url } from "../../App";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const Stock = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetch(`${backend_url}/allCars`)
      .then((res) => res.json())
      .then((data) => setCarData(data));
  }, []);

  const brandCount = carData.reduce((acc, car) => {
    acc[car.Car_name] = (acc[car.Car_name] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(brandCount),
    datasets: [
      {
        label: "Number of Cars",
        data: Object.values(brandCount),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Stock by Brand</h1>
      <Bar data={data} />
    </div>
  );
};

export default Stock;

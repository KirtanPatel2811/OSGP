import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const InventoryPage = () => {
  const [categoryInventory, setCategoryInventory] = useState([]);
  const [brandInventory, setBrandInventory] = useState([]);

  useEffect(() => {
    const fetchCategoryInventory = async () => {
      try {
        const response = await axios.get("http://localhost:5555/inventory");
        setCategoryInventory(response.data.inventory);
      } catch (error) {
        console.error("Error fetching category inventory:", error);
      }
    };

    const fetchBrandInventory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5555/brand-inventory"
        );
        setBrandInventory(response.data.inventory);
      } catch (error) {
        console.error("Error fetching brand inventory:", error);
      }
    };

    fetchCategoryInventory();
    fetchBrandInventory();
  }, []);

  return (
    <div>
      <h1>Car Inventory</h1>

      <h2>By Brand</h2>
      <ResponsiveContainer width={1000} height={500}>
        <BarChart data={brandInventory} barCategoryGap="30%">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id">
            <Label value="Brand" offset={-10} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value="Number of Cars" angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="count" fill="#8884d8" /> */}
          <Bar dataKey="count" fill="#000000" />
        </BarChart>
      </ResponsiveContainer>

      <h2>By Category</h2>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={categoryInventory} barCategoryGap="30%">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id">
            <Label value="Category" offset={-10} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value="Number of Cars" angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="count" fill="#82ca9d" /> */}
          <Bar dataKey="count" fill="#000000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InventoryPage;

import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
// import add_product_icon from "../../assets/Product_Cart.svg";
// import list_product_icon from "../../assets/Product_list_icon.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addCar"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          {/* <img src={add_product_icon} alt="" /> */}
          <p>Add Car</p>
        </div>
      </Link>
      <Link to={"/listCar"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          {/* <img src={list_product_icon} alt="" /> */}
          <p>Cars List</p>
        </div>
      </Link>
      <Link to={"/listUsers"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Users List</p>
        </div>
      </Link>
      <Link to={"/inventory"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Inventory</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;

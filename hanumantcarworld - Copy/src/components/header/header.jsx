import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Hanumant Car World</div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/car">All Cars</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        <form className="form-inline ml-auto justify-content-center">
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-secondary">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </nav>
    </header>
  );
};

export default Header;

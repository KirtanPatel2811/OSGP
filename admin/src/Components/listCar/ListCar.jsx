import React, { useState, useEffect } from "react";
import "./ListCar.css";
import cross_icon from "../../assets/cross_icon.png";

const ListCar = () => {
  const [allCars, setAllCars] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:5555/allCars")
      .then((res) => res.json())
      .then((data) => {
        setAllCars(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeCar = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this car?"
    );
    if (confirmed) {
      await fetch(`http://localhost:5555/removeproduct`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      await fetchInfo();
    }
  };

  return (
    <div className="listCar">
      <h1>Cars List</h1>
      {/* Add cars list */}
      <div className="listCar-format-main">
        <p>ID</p>
        <p>Name</p>
        <p>Model</p>
        <p>Year</p>
        <p>Price</p>
        {/* <p>Mileage</p>
        <p>Condition</p>
        <p>Category</p> */}
        <p>Image</p>
        <p>Remove</p>
      </div>
      <div className="listCar-allCars">
        <hr />
        {allCars.map((Car, index) => {
          return (
            <React.Fragment key={index}>
              <div className="listCar-format-main listCar-format">
                <p>{Car.id}</p>
                <p>{Car.Car_name}</p>
                <p>{Car.Model}</p>
                <p>{Car.Year}</p>
                <p>₹{Car.Price}</p>
                {/* <p>{Car.Mileage}</p>
                <p>{Car.Condition}</p>
                <p>{Car.Category}</p> */}
                <img src={Car.Image} alt="Car" className="listCar-car-image" />
                <img
                  onClick={() => removeCar(Car.id)}
                  className="listCar-remove-icon"
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ListCar;

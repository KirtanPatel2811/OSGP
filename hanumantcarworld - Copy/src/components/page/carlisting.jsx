import React from "react";
import { Link } from "react-router-dom";
import "../../styles/AllCars.css"; // Ensure this path is correct
import carImage from "../../assets/all-images/cars-img/images.png"; // Example car image

const carlisting = () => {
  const cars = [
    { id: 1, name: "Car Model 1", image: carImage, price: "₹2,00,000" },
    { id: 2, name: "Car Model 2", image: carImage, price: "₹7,00,000" },
    { id: 3, name: "Car Model 3", image: carImage, price: "₹4,00,000" },
    // Add more car objects here
  ];

  return (
    <div className="all-cars-container">
      <div className="container">
        <h3 className="section-title">All Cars</h3>
        <div className="row">
          {cars.map((car) => (
            <div className="col-lg-4 col-md-6 mb-4" key={car.id}>
              <div className="car-card">
                <div className="car-image-container">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="img-fluid car-image"
                  />
                </div>
                <div className="car-details">
                  <h4 className="car-name">{car.name}</h4>
                  <p className="car-price">{car.price}</p>
                  <Link
                    to={`/car-details/:id=${car.id}`}
                    className="btn btn-primary view-details-btn"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default carlisting;

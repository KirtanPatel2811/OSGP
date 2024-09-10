import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/CarDetails.css'; // Ensure this path is correct

const cardetails = () => {
  const location = useLocation();
  const { car } = location.state || {};

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="car-details">
      <h2>{car.name}</h2>
      <img src={car.image} alt={car.name} />
      <p><strong>Price:</strong> {car.price}</p>
      <p>{car.description}</p>
    </div>
  );
};

export default cardetails;

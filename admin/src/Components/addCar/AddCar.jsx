import React, { useState } from "react";
import "./AddCar.css";

const addCar = () => {
  const [CarDetails, setCarDetails] = useState({
    Car_name: "",
    id: "",
    Brand: "",
    Model: "",

    Year: "",
    Price: "",
    Description: "",
    Image: "",
    Mileage: "",
    Condition: "",
    Category: "",
    Features: "",
    Number_Plate: "",
  });

  const [image, setImage] = useState(false);
  const [errors, setErrors] = useState({});

  const imageHandler = (e) => {
    setCarDetails({ ...CarDetails, image: e.target.files[0] });
    setImage(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setCarDetails({ ...CarDetails, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!CarDetails.Car_name) newErrors.Car_name = "Car name is required";
    if (!CarDetails.id) newErrors.id = "Car ID is required";
    if (!CarDetails.Brand) newErrors.Brand = "Brand is required";
    if (!CarDetails.Model) newErrors.Model = "Model is required";
    if (!CarDetails.Year) newErrors.Year = "Year is required";
    if (!CarDetails.Price) newErrors.Price = "Price is required";
    if (!CarDetails.Description)
      newErrors.Description = "Description is required";
    if (!image) newErrors.Image = "Image is required";
    if (!CarDetails.Mileage) newErrors.Mileage = "Mileage is required";
    if (!CarDetails.Condition) newErrors.Condition = "Condition is required";
    if (!CarDetails.Category) newErrors.Category = "Category is required";
    if (!CarDetails.Features) newErrors.Features = "Features are required";
    if (!CarDetails.Number_Plate)
      newErrors.Number_Plate = "Number Plate is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const Add_Car = async () => {
    console.log(CarDetails);

    let responseData;
    let Car = CarDetails;

    let formData = new FormData();
    formData.append("Cars", image);

    await fetch("http://localhost:5555/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      Car.Image = responseData.image_url;
      console.log(Car);
      await fetch("http://localhost:5555/addCar", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Car),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Car Added") : alert("Failed");
        });
    }
  };

  return (
    <div className="addCar">
      <div className="addCar-itemfield">
        <p>Car Name</p>
        <input
          value={CarDetails.Car_name}
          onChange={changeHandler}
          type="text"
          name="Car_name"
          placeholder="Please type here"
        />
      </div>
      <div className="addCar-itemfield">
        <p>Car ID</p>
        <input
          value={CarDetails.id}
          onChange={changeHandler}
          type="text"
          name="id"
          placeholder="Please type here"
        />
      </div>
      <div className="addCar-itemfield">
        <p>Car Brand</p> {/* Add this field */}
        <input
          value={CarDetails.Brand}
          onChange={changeHandler}
          type="text"
          name="Brand"
          placeholder="Please type here"
        />
      </div>
      <div className="addCar-itemfield">
        <p>Car Model</p>
        <input
          value={CarDetails.Model}
          onChange={changeHandler}
          type="text"
          name="Model"
          placeholder="Please type here"
        />
      </div>
      <div className="addCar-itemfield">
        <p>Car Year</p>
        <input
          value={CarDetails.Year}
          onChange={changeHandler}
          type="number"
          name="Year"
          placeholder="Please type here"
        />
      </div>
      <div className="addCar-itemfield">
        <p>Car Price</p>
        <input
          value={CarDetails.Price}
          onChange={changeHandler}
          type="number"
          name="Price"
          placeholder="Please type here"
        />
      </div>
      <div className="addCar-itemfield">
        <p>Car Description</p>
        <textarea
          value={CarDetails.Description}
          onChange={changeHandler}
          name="Description"
          placeholder="Please type here"
        />
      </div>
      <div className="addCar-itemfield">
        <p>Car Image</p>
        <input onChange={imageHandler} type="file" name="Image" />
      </div>
      <div className="addCar-itemfield">
        <p>Car Mileage</p>
        <input
          value={CarDetails.Mileage}
          onChange={changeHandler}
          type="number"
          name="Mileage"
          placeholder="Please type here"
        />
      </div>

      <div className="addCar-itemfield">
        <p>Number Plate</p>
        <input
          value={CarDetails.Number_Plate}
          onChange={changeHandler}
          type="text"
          name="Number_Plate"
          placeholder="Please type here"
        />
      </div>
      <div className="addCar-itemfield">
        <p>Car Condition</p>
        <input
          value={CarDetails.Condition}
          onChange={changeHandler}
          type="text"
          name="Condition"
          placeholder="Please type here"
        />
      </div>
      <div className="addCar-itemfield">
        <p>Car Category</p>
        <select
          value={CarDetails.Category}
          onChange={changeHandler}
          name="Category"
          className="add-Car-selector"
        >
          <option value="">Select Category</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Coupe">Coupe</option>
          <option value="Convertible">Convertible</option>
          <option value="Minivan">Minivan</option>
          <option value="Pickup Truck">Pickup Truck</option>
          <option value="Van">Van</option>
          <option value="Wagon">Wagon</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Luxury">Luxury</option>
          <option value="Sports Car">Sports Car</option>
        </select>
      </div>
      <div className="addCar-itemfield">
        <p>Features</p>
        <input
          value={CarDetails.Features}
          onChange={changeHandler}
          type="text"
          name="Features"
          placeholder="Please type here"
        />

        <button
          onClick={() => {
            Add_Car();
          }}
          type="submit"
          className="addCar-button"
        >
          Add Car
        </button>
      </div>
    </div>
  );
};

export default addCar;

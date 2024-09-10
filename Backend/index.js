const port = 5555;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect(
  "mongoDB URL",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Image Storage
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("Cars"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// Mongoose Schemas
// Mongoose Schemas
const CarSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  Car_name: {
    type: String,
    required: true,
  },
  Model: {
    type: String,
    required: true,
  },
  Year: {
    type: Number,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },

  Mileage: {
    type: Number,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  Brand: {
    type: String, // Add this field
    required: true,
  },
  Condition: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
  Number_Plate: {
    type: String,
    required: true,
  },
});

const FeatureSchema = new mongoose.Schema({
  Car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
    required: true,
  },
  Features: {
    type: Array,
    required: true,
  },
  Model: {
    type: String,
    required: true,
  },
});

const CategorySchema = new mongoose.Schema({
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  numberPlate: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
});

const Car = mongoose.model("Car", CarSchema);
const Feature = mongoose.model("Feature", FeatureSchema);
const CategoryModel = mongoose.model("Category", CategorySchema); // Renamed from Category to CategoryModel

// API Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Car Inventory API");
});

app.post("/addCar", async (req, res) => {
  console.log("Request Body:", req.body);

  const car = new Car({
    id: req.body.id,
    Car_name: req.body.Car_name,
    Model: req.body.Model,
    Brand: req.body.Brand,
    Year: req.body.Year,
    Price: req.body.Price,
    Description: req.body.Description,
    Image: req.body.Image,
    Mileage: req.body.Mileage,
    Category: req.body.Category,
    Condition: req.body.Condition,
    Number_Plate: req.body.Number_Plate,
  });

  try {
    // Save the car to the database
    const savedCar = await car.save();

    // Create and save Feature and Category documents
    const Features = new Feature({
      Car: savedCar._id,
      Features: req.body.Features || [],
      Model: savedCar.Model, // Include car model in features
    });
    const Category = new CategoryModel({
      // Updated to use CategoryModel
      car: savedCar._id,
      name: savedCar.Car_name,
      numberPlate: savedCar.Number_Plate,
      Category: req.body.Category || "", // Make sure to use correct field name
    });

    await Features.save();
    await Category.save();

    console.log("Car, Feature, and Category saved");
    res.json({
      success: true,
      name: req.body.Car_name,
    });
  } catch (error) {
    console.error("Error saving car:", error);
    if (error.code === 11000) {
      res.status(400).json({
        success: false,
        message: "Car with this ID already exists",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
});

app.get("/allCars", async (req, res) => {
  try {
    const { category } = req.query;
    let cars;

    if (category) {
      cars = await Car.find({ Category: category });
    } else {
      cars = await Car.find({});
    }

    console.log("Cars Fetched");
    res.send(cars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).send({ message: "An error occurred while fetching cars." });
  }
});

// Remove Cars
app.post("/removeproduct", async (req, res) => {
  await Car.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({
    success: true,
    message: "Car removed successfully",
  });
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on port " + port);
  } else {
    console.log("Error: " + error);
  }
});

////////////
//will be added through frontend
// const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const UserSchema = new mongoose.Schema({
  userId: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
    unique: true,
  },
});

const ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

const InquirySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
});

UserSchema.plugin(AutoIncrement, { inc_field: "userId" });

const User = mongoose.model("User", UserSchema);
const Review = mongoose.model("Review", ReviewSchema);
const Inquiry = mongoose.model("Inquiry", InquirySchema);
// Add User
app.post("/adduser", async (req, res) => {
  console.log("Request Body:", req.body);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    contactNumber: req.body.contactNumber,
  });

  try {
    await user.save();
    console.log("User Saved");
    res.json({
      success: true,
      message: "User added successfully",
    });
  } catch (error) {
    console.error("Error saving user:", error);
    if (error.code === 11000) {
      // Handle duplicate key error
      res.status(400).json({
        success: false,
        message: "User with this email or phone number already exists",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
});

// Add Review
app.post("/addreview", async (req, res) => {
  console.log("Request Body:", req.body);

  const review = new Review({
    name: req.body.name,
    email: req.body.email,
    review: req.body.review,
  });

  try {
    await review.save();
    console.log("Review Saved");
    res.json({
      success: true,
      message: "Review added successfully",
    });
  } catch (error) {
    console.error("Error saving review:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Add Inquiry
app.post("/addinquiry", async (req, res) => {
  console.log("Request Body:", req.body);

  const inquiry = new Inquiry({
    Name: req.body.Name,
    contact: req.body.contact,
    email: req.body.email,
    requirements: req.body.requirements,
    budget: req.body.budget,
  });

  try {
    await inquiry.save();
    console.log("Inquiry Saved");
    res.json({
      success: true,
      message: "Inquiry added successfully",
    });
  } catch (error) {
    console.error("Error saving inquiry:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});
//inq
app.get("/inquiries", async (req, res) => {
  try {
    const inquiries = await Inquiry.find();
    res.json({
      success: true,
      inquiries: inquiries,
    });
  } catch (error) {
    console.error("Error retrieving inquiries:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

//users

// Fetch all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      success: true,
      users,
    });
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Remove user
app.post("/removeUser", async (req, res) => {
  try {
    await User.findOneAndDelete({ userId: req.body.userId });
    res.json({
      success: true,
      message: "User removed successfully",
    });
  } catch (error) {
    console.error("Error removing user:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});
////////////////////
// Add this to your backend code
app.get("/inventory", async (req, res) => {
  try {
    const inventory = await Car.aggregate([
      {
        $group: {
          _id: "$Category", // Group by category
          count: { $sum: 1 }, // Count number of cars per category
        },
      },
    ]);

    res.json({
      success: true,
      inventory: inventory,
    });
  } catch (error) {
    console.error("Error retrieving inventory:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});
// Endpoint to get car count by brand
app.get("/brand-inventory", async (req, res) => {
  try {
    const inventory = await Car.aggregate([
      {
        $group: {
          _id: "$Brand", // Group by brand
          count: { $sum: 1 }, // Count number of cars per brand
        },
      },
    ]);

    res.json({
      success: true,
      inventory: inventory,
    });
  } catch (error) {
    console.error("Error retrieving brand inventory:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

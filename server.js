const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// Allow using environment variables
require("dotenv").config();

console.log("All Environment variables:");
console.log("NODE_ENV:" + process.env.NODE_ENV);
console.log("REACT_APP_BACKEND_URL:" + process.env.REACT_APP_BACKEND_URL);
console.log("BACKEND_MAPS_API_KEY:" + process.env.BACKEND_MAPS_API_KEY);
console.log("REACT_APP_MAPS_API_KEY:" + process.env.REACT_APP_MAPS_API_KEY);

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI + "?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const locationsRouter = require("./routes/locations");
app.use("/locationsdb", locationsRouter);

const googlePlacesAPI = require("./routes/googlePlacesAPI");
app.use("/googleplacesapi", googlePlacesAPI);

app.use(express.static("./build"));
// app.get('/*',(req,res) => {
// 	res.render('index');
// });

// app.use('/',)

// app.use('/*',(req, res) => {
// 	console.log("Redirecting request for " + req.baseUrl + " to homepage");
// 	res.redirect("/");
// })

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

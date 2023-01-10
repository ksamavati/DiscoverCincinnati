const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config(); // import process.env

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

// Handle 404
app.get("*", function (req, res) {
  // Redirect html requests to homepage
  if (req.accepts("html")) {
    console.log("Redirecting request for '" + req.originalUrl + "' to homepage");
    app.get("/mysub-application1/*", (req, res) => {
      //this is required to support any client side routing written in react.
      res.sendFile(path.join(__dirname, "./public", "index.html"));
    });
  }

  // Respond to JSON requests with error
  if (req.accepts("json")) {
    res.json({ error: "Not found" });
    return;
  }

  // Respond to text requests with 'not found'
  res.type("txt").send("Not found");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

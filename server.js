const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// Allow using environment variables
require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://user:1234@cluster0.fuypnaj.mongodb.net/database?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
	console.log("MongoDB database connection established successfully");
})

const locationsRouter = require('./routes/locations');
app.use('/locationsdb', locationsRouter);

app.use(express.static('./build'));

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
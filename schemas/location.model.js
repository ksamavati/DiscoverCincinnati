const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
	id: { type: Number, required: true },
	name: { type: String, required: true },
	address1: { type: String, required: true },
	address2: { type: String, required: true },
	phone: { type: String, required: true },
	category: { type: String, required: true },
	description: { type: String, required: true },
	image: { type: String, required: false }
}, {
	timestamps: false,
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
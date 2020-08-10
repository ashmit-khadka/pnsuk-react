const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const minutesSchema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		image: { type: String, required: true },
		url: { type: String, required: true },
	},
	{
		collection: 'minutes'
	}
);

const Minute = mongoose.model('Minute', minutesSchema);

module.exports = Minute;
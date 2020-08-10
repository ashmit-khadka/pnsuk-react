const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const advertSchema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		image: { type: String, required: true },
		url: { type: String, required: true },
	},
	{
		collection: 'adverts'
	}
);

const Advert = mongoose.model('Advert', advertSchema);

module.exports = Advert;
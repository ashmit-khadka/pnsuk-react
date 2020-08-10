const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memberSchema = new Schema(
	{
		name: { type: String, required: true },
		position: { type: String, required: true },
		type: { type: String, required: true },
		image: { type: String, required: true },
	},
 	{
		collection: 'members'
	}
);

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
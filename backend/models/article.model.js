const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema(
	{
		title: { type: String, required: true },
		image: { type: String, required: true },
		date: { type: Date, required: true },
		text: { type: String, required: true },
		event: { type: Boolean, required: true },
		aid: { type: Boolean, required: true },
		guest: { type: Boolean, required: true },
		project: { type: Boolean, required: true },
		home: { type: Boolean, required: true },


	},
	{
		collection: 'articles'
	}
);

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
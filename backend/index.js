const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const articleRouter = require('./routes/article');
const memberRouter = require('./routes/member');
const advertRouter = require('./routes/advert');
const minuteRouter = require('./routes/minute');

app.use('/articles', articleRouter);
app.use('/members', memberRouter);
app.use('/adverts', advertRouter);
app.use('/minutes', minuteRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

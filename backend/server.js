const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const multer = require('multer');
var routes = require('../backend/route/routes');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const app = express();

app.use(
  cors({
    origin: 'http://localhost:4200',
  })
);
// Connection
app.listen(9002, function check(error) {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Server started on port 9002');
  }
});

// Database connection
mongoose
  .connect('mongodb+srv://new_user_1:Raman4545@cluster0.fcjsvac.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connected to database');
  })
  .catch((error) => {
    console.log('Error connecting to database:', error);
  });
app.use(express.json());
app.use(routes);

require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const app = express();

//async errors

//custom error handler middlewares
const notFound = require('./middleware/not-found');
const customErrorHandler = require('./middleware/error-handler');

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>Styles API</h1><a href = "/api/v1/styles">API route</a>');
});

// style routes
app.use(notFound);
app.use(customErrorHandler);

// start server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`server is listening on ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

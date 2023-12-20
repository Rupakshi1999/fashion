require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const stylesRouter = require('./routes/styles');
const authenticateUser = require('./middleware/authentication');

//custom error handler middlewares
const notFound = require('./middleware/not-found');
const customErrorHandler = require('./middleware/error-handler');

// middleware
app.use(express.json());

// auth routes
const authRouter = require('./routes/auth');
app.use('/api/v1/auth', authRouter);

// style routes
app.use('/api/v1/styles', [authenticateUser, stylesRouter]);
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

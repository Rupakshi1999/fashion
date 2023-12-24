require('dotenv').config();
require('express-async-errors');

// Security packaages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimitter = require('express-rate-limit');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const jobsRouter = require('./routes/jobs');
const authenticateUser = require('./middleware/authentication');
const path = require('path');
//custom error handler middlewares
const notFound = require('./middleware/not-found');
const customErrorHandler = require('./middleware/error-handler');

const fileupload = require('express-fileupload');
// Hosting the project on cloud proxy
app.set('trust proxy', 1);
// limit each IP to 100 requests per window
app.use(rateLimitter({ windowMS: 15 * 60 * 1000, max: 100 }));

app.use(
  express.static(path.resolve(__dirname, './client/application-tracker/build'))
);

// middleware to read json data
app.use(express.json());

// security packages middleware
app.use(helmet());
app.use(cors());
app.use(xss());

// file upload middleware
app.use(fileupload());

app.get('/', (req, res) => {
  res.send(
    '<h1><a href="/api/v1/auth/login"> Login</a></h1><h1><a href="/api/v1/auth/register"> Register</a></h1><h1><a href="/api/v1/jobs"> Get/Create Jobs</a></h1>'
  );
});
// auth routes
const authRouter = require('./routes/auth');
app.use('/api/v1/auth', authRouter);

// get uploaded files
const filesRouter = require('./routes/files');
app.use('/api/v1/files', [authenticateUser, filesRouter]);

// Job routes
app.use('/api/v1/jobs', [authenticateUser, jobsRouter]);
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

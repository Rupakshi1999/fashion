require('dotenv').config();
const connectDB = require('./db/connect');
const Jobs = require('./models/styles');

const jsonJobs = require('./styles.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Jobs.deleteMany(); // clean the data
    await Jobs.create(jsonJobs);
    console.log('success!');
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();

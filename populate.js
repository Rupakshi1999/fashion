require('dotenv').config();
const connectDB = require('./db/connect');
const Style = require('./models/styles');

const jsonStyles = require('./styles.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Style.deleteMany(); // clean the data
    await Style.create(jsonStyles);
    console.log('success!');
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();

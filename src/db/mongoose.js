const mongoose = require("mongoose");
const chalk = require("chalk");
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    return console.log(chalk.bgGreen("Connected To Database"));
  })
  .catch(() => {
    return console.log(chalk.bgRed("Unable to Connect To Database try Again"));
  });

// mongoose.connect(MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// });
// mongoose.connection.on("connected", () => {
//   console.log(`Connected to Mongo instance`);
// });

// mongoose.connection.on("error", err => {
//   console.log("Unable to Connect to DataBase");
// });

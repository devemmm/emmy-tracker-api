const mongoose = require("mongoose");
// const chalk = require("chalk");
const MONGO_URL = process.env.MONGO_URL;

// mongoose
//   .connect(MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   })
//   .then(() => {
//     return console.log("Connected To Database");
//   })
//   .catch(() => {
//     return console.log("Unable to Connect To Database try Again");
//   });

mongoose.connect('mongodb+srv://Emmanuel:Emmanuel@dj12345@emmanuel.haizz.mongodb.net/tracker-api?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
mongoose.connection.on("connected", () => {
  console.log(`Connected to Mongo instance`);
});

mongoose.connection.on("error", err => {
  console.log("Unable to Connect to DataBase");
});

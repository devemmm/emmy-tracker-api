require("./db/mongoose");
require("./models/User");
require("./models/Track");
const express = require("express");
const bodyPerser = require("body-parser");
const authRoute = require("./routes/authRoute");
const trackRouter = require("./routes/trackRoute");
const requireAuth = require("./middleware/requireAuth");

const app = express();
const port = process.env.PORT;

app.use(bodyPerser.json());
app.use(authRoute);
app.use(trackRouter);

app.get("/", requireAuth, (req, res) => {
  res.send(`Your Email ${req.user.email}`);
});

app.listen(port, () => {
  console.log(`Server is Listerning on Port ${port}`);
});

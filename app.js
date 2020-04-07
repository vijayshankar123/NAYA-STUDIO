const express = require("express");
const app = express();
const config = require("config");
const user = require("./routes/users");
const path = require("path");

const connectDB = require("./config/db");
app.use(express.json({ extended: false }));

//connecting DB
connectDB();

// defining routes
app.use(user);

//serve static assets in production

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//defining port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server is running on port  " + port);
});

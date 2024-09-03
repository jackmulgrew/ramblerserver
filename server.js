require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const journeyRoutes = require("./routes/journeys");
const userRoutes = require("./routes/user");
var cors = require('cors')
// express app
const app = express();
app.use(cors())
// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/journeys/", journeyRoutes);
app.use("/api/user/", userRoutes);


mongoose
  .connect(
    "mongodb+srv://jackmulgrew:BingBong32321@cluster0.ojuszzg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    //listen for requests
    app.listen(4000, () => {
      console.log("Connected to DB & listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

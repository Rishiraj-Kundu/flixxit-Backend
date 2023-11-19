const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/UserRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://rishirajkundu1189:Vf5KeQBCneGvLxwZ@cluster0.7xtaz1s.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB Connected");
  });

app.use("/api/user", userRoutes);

app.listen(5000, console.log("server started"));

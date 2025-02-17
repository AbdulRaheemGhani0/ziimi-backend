require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const itemModel = require("./models/item");
const port = 5000;
const app = express();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("MongoDB connection error:", err));


const userSchema = new mongoose.Schema({
    name:String,
    age:Number
})
const userModel = mongoose.model("users", userSchema);

app.get("/getUsers", async (req, res) => {
  const userData = await userModel.find());
  res.json(userData);
});

app.listen(port, () => console.log("server is running on PORT ", port));

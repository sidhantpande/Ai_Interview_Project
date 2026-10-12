require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ai_interview");

const app = express();
app.use(
  cors()
);

app.use(express.json());


const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("Server is running");
});



const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
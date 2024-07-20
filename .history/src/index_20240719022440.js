const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", require("../Routes/route"));

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Invalid Endpoint" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

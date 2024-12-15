const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/DB.js");
const userRoutes = require("./routes/UserRoutes.js");

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5700;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

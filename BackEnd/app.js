const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { connectToDatabase } = require("./config/database");
const routes = require("./routes/imagesRoute");
const imageRoutes = require("./routes/imagesRoute");
const blogRoutes = require("./routes/blogsRoute");
const eventsRoutes = require("./routes/eventsRoute");
const researchRoutes = require("./routes/researchRoute");
const artistRoutes = require("./routes/artistRoute");
const studentRoutes = require("./routes/studentRoute");
const adminRoutes=require("./routes/adminRoute")
const { default: axios } = require("axios");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

// Database connection
connectToDatabase();

const port = process.env.PORT || 5000;



app.use(cors());
app.use(bodyParser.json());
app.use("/api/admin",adminRoutes)
app.use("/api", imageRoutes);
app.use("/api/", blogRoutes);
app.use("/api/", eventsRoutes);
app.use("/api/", researchRoutes);
app.use("/api/", artistRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

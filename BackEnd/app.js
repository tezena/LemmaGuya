const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const { connectToDatabase } = require('./config/database'); // Adjust the path
const routes = require('./routes/imagesRoute')
const imageRoutes = require('./routes/imagesRoute'); 
const blogRoutes = require('./routes/blogsRoute');
const eventsRoutes = require('./routes/eventsRoute')
// Use the connectToDatabase function to establish the connection
connectToDatabase();

// ... Define your Express app setup, routes, and other code here

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', imageRoutes);
app.use("/api/",blogRoutes);
app.use("/api/",eventsRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

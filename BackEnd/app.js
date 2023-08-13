const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const { connectToDatabase } = require('./config/database'); // Adjust the path
const routes = require('./routes/imagesRoute')
const imageRoutes = require('./routes/imagesRoute'); 
// Use the connectToDatabase function to establish the connection
connectToDatabase();

// ... Define your Express app setup, routes, and other code here

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', imageRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

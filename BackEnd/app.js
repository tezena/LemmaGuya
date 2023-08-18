const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const { connectToDatabase } = require('./config/database'); // Adjust the path
const routes = require('./routes/imagesRoute')
const imageRoutes = require('./routes/imagesRoute'); 
const blogRoutes = require('./routes/blogsRoute');
const eventsRoutes = require('./routes/eventsRoute');
const researchRoutes = require('./routes/researchRoute');
const artistRoutes = require('./routes/artistRoute')
// Use the connectToDatabase function to establish the connection
connectToDatabase();

// ... Define your Express app setup, routes, and other code here

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', imageRoutes);
app.use("/api/",blogRoutes);
app.use("/api/",eventsRoutes);
app.use("/api/",researchRoutes);
app.use("/api/",artistRoutes)


const users = [
  { id: 1, username: "user1", password: "fbcdff32r3223", name: "User One" },
  { id: 2, username: "user2", password: "password2", name: "User Two" },
];

if (true) {
  res.status(200).json({ message: 'Login successful' });
} else {
  res.status(401).json({ message: 'Login failed' });
}

app.post('/api/login', (req, res) => {
  if (true) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Login failed' });
  }
});
// app.post("/api/login", (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );
//   if (user) {
//     res.status(200).json({ id: user.id, name: user.name });
//   } else {
//     res.status(401).json({ message: "Invalid credentials" });
//   }
// });

// app.get('/api/login', (req, res) => {
//   const { username, password } = req.query;

//   const user = users.find(u => u.username === username && u.password === password);

//   if (user) {
//     res.json({ message: 'Login successful', user });
//   } else {
//     res.status(401).json({ message: 'Login failed: Invalid username or password' });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

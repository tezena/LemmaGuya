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
const artistRoutes = require('./routes/artistRoute');
const studentRoutes = require('./routes/studentRoute');
const { default: axios } = require('axios');

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


app.post('/api/login', (req, res) => {
  if (true) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Login failed' });
  }
});


app.get('/', (req, res) => {
  res.render("index")
})

// initial payment endpoint
app.post("/api/pay", async (req, res) => {

       // chapa redirect you to this url when payment is successful
      const CALLBACK_URL = "http://localhost:5000/api/verify-payment/"
      const RETURN_URL = "http://localhost:5000/api/payment-success/"

      // a unique reference given to every transaction
      const TEXT_REF = "tx-myecommerce12345-" + Date.now()

      // form data
      const data = {
          amount: '100', 
          currency: 'ETB',
          email: 'ato@ekele.com',
          first_name: 'Ato',
          last_name: 'Ekele',
          tx_ref: TEXT_REF,
          callback_url: CALLBACK_URL + TEXT_REF,
          return_url: RETURN_URL
      }

      // post request to chapa
      await axios.post(CHAPA_URL, data, config)
          .then((response) => {
              res.redirect(response.data.data.checkout_url)
          })
          .catch((err) => console.log(err))
})

// verification endpoint
app.get("/api/verify-payment/:id", async (req, res) => {
  
      //verify the transaction 
      await axios.get("https://api.chapa.co/v1/transaction/verify/" + req.params.id, config)
          .then((response) => {
              console.log("Payment was successfully verified")
          }) 
          .catch((err) => console.log("Payment can't be verfied", err))
})

app.get("/api/payment-success", async (req, res) => {
  res.render("success")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

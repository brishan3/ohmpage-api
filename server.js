require('dotenv').config(); //load .env variables
const express = require('express'); 
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080; 

const LinksRoute = require('./routes/LinksRoute');
const BackgroundsRoute = require('./routes/BackgroundsRoute');

//
// Middleware
//
app.use((req, res, next) => {
  console.log(new Date(Date.now()).toLocaleString(), req.originalUrl);
  next();
})
app.use(express.json()); // add req.body
app.use(cors()); // allow cross-origin resource sharing
app.use(express.static('public')); // adds public 1111 for serving images

//
// Routing
//
app.use('/links', LinksRoute);
app.use('/backgrounds', BackgroundsRoute);

//
// Listening
//
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
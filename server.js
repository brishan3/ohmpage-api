require('dotenv').config(); //load .env variables
const express = require('express'); 
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080; 

const LinksRoute = require('./routes/LinksRoute');

//
// Middleware
//
app.use((req, res, next) => {
  console.log(new Date(Date.now()).toLocaleString(), req.originalUrl);
  next();
})
app.use(express.json()); // add req.body
app.use(cors()); // allow cross-origin resource sharing
app.use(express.static('backgrounds')); // adds public folder for serving images

//
// Routing
//
app.use('/links', LinksRoute);

//
// Listening
//
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
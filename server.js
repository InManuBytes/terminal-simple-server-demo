const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT
const app = express();
//const cors = require('cors');
//app.use(cors());

app.get('/', (req, res, next) => {
  res.send('<h1>Hello World</h1>');
})

// spin up
app.listen(PORT, () => {
  console.log('Listening on port :', PORT);
})

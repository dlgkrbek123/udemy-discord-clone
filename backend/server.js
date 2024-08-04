const express = require('express');
const http = require('http');
const cors = require('cors');
const mongo = require('mongoose');

// env
require('dotenv').config();
const PORT = process.env.PORT || process.env.API_PORT;

// express
const app = express();
app.use(express.json());
app.use(cors());

// server
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

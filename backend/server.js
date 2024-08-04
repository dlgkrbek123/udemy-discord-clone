const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');

// routes
const authRoutes = require('./routes/authRoutes');

// env
require('dotenv').config();
const PORT = process.env.PORT || process.env.API_PORT;

// express
const app = express();
app.use(express.json());
app.use(cors());

// register routes and create server
app.use('/api/auth', authRoutes);
const server = http.createServer(app);

// mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // mongoose 연결후 서버 실행
    server.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('database connection failed: server not started');
    console.error(error);
  });

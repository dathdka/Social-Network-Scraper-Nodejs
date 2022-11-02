const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require('./routers/routers')
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors({ origin: true }));

app.use('/api',router)

const server = http.createServer(app);

const PORT = process.env.PORT || 1234;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`server runing on port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("could not connect to mongoose");
    console.error(err);
  });

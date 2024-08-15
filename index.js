
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';

import bookroute from "./route/book.route.js"; 
import userRoute from './route/user.route.js';


const path = require('path'); const { fileURLToPath } = require('url');
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4002;
const URI = process.env.MONGODB_URI;

const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../../Frontend/dist')));

// connect to MongoDB
mongoose.connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Bookstore API');
});

// Define routes
app.use("/book", bookroute);
app.use("/user", userRoute);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../Frontend/dist', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

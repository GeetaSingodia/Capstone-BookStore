
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';

import bookroute from "./route/book.route.js"; 
import userRoute from './route/user.route.js';


const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
mongoose.connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// defining routes
app.use("/book", bookroute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

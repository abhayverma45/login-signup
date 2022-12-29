const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config({ path: "./config.env" });
require("./connecter/dbconnection");

// const User =require("./models/user")
app.use(express.json());

// links the router file
app.use(require('./router/auth'))


// getting port no from dotenv file

const PORT = process.env.PORT;



// middelware
const middelware = (req, res, next) => {
  console.log(`hello my middleware`);
  next();
};

app.listen(PORT, () => {
  console.log(`server is created at port no ${PORT}`);
});

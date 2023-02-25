const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const cors = require("cors");
const errorMiddleware = require("./middleware/error");

// Config
app.use(cors({
  origin: "*"
}))
require("dotenv").config()


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports

const user = require("./routes/userRoute");


app.use("/", user);


// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;

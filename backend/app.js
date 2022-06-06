const express = require('express');
const app = express();

app.use(express.json())

const { application } = require("express");

//Route Imports
const route = require("./routes/productRoute");



module.exports = app
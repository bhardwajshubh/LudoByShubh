require("dotenv").config();
const express = require('express');
const ejs = require('ejs');
const app = express();
app.set("view engine" , "ejs");

app.use(express.urlencoded({extended : true}));
app.use(express.static(`${__dirname}/public`));




module.exports = app;

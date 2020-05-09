require("dotenv").config();
const express = require('express');
const knexUnConfig = require('knex');
const pg = require('pg');
const { Model } = require('objection');
const cookieParser = require('cookie-parser');
require('./commons');
const knexConfig = require('./knexfile');
const applicationRoutes = require('./routes/index');
const app = express();

const knex = knexUnConfig(knexConfig.development);
Model.knex(knex);
app.set("view engine" , "ejs");

app.use(express.urlencoded({extended : true}));
app.use(express.static(`${__dirname}/public`));
app.use(cookieParser());
app.use('/app' , applicationRoutes);

module.exports = app;

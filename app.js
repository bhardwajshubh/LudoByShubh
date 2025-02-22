require("dotenv").config();
const express = require('express');
const knexUnConfig = require('knex');
const pg = require('pg');
const { Model } = require('objection');
const knexConfig = require('./knexfile');
const app = express();

const knex = knexUnConfig(knexConfig.development);
Model.knex(knex);
app.set("view engine" , "ejs");

app.use(express.urlencoded({extended : true}));
app.use(express.static(`${__dirname}/public`));




module.exports = app;

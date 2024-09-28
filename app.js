 const express = require('express');
//import express from "express";
const bodyParser = require('body-parser');
//import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 3000;
const moment = require('moment');
app.locals.moment = moment;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Set up routes
const indexRoutes = require('./src/routes/index');
app.use('/', indexRoutes);

app.get("/contact.html", (req,res) => {
  res.render("contact.ejs");
});

app.get("/post.html", (req,res) => {
  res.render("samplepost.ejs");
});

app.get("/index.html", (req,res) => {
  res.render("index.ejs")
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

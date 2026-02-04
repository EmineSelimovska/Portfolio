const path = require('path');
const express = require('express');
const fs = require('fs');
const app = express();

const publicDirectory = path.join(__dirname, '../public');

app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

app.get("/",function(req,res){
  res.render('home')
})

app.get('/skills', function (req, res) {
  res.render('index',{
    title: 'Home',
    name: 'Emine'
  })
})

app.get('/education', function (req, res) {
  res.render('education')
})

app.get('/projects', function (req, res) {
  res.render('projects');
})

app.get('/experience', function (req, res) {
  res.render('experience');
})


app.get('/certification', function (req, res) {
  res.render('certification')
})


app.get('/about', function (req, res) {
 
    res.render('about')
   
  })

  app.get('/contact', function (req, res) {
    res.render('contact')
  })

app.listen(3000, () => {
    console.log("The server is running on port 3000");
    
})
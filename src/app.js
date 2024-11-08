const path = require('path');
const express = require('express');
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
  res.send('<h1>Hello from the Projects page!</h1>')
})


app.get('/certification', function (req, res) {
  res.send('<h1>Hello from the Certification page!</h1>')
})


app.get('/about', function (req, res) {
    res.send('<h1>Hello from the About page!</h1>')
  })

  app.get('/contact', function (req, res) {
    res.render('contact')
  })

app.listen(3000, () => {
    console.log("The server is running on port 3000");
    
})
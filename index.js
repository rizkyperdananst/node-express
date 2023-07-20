const express = require('express');
const app = express();
// const mongoose = require("mongoose");
const port = 3000;
const serverDB = require('./config/db');
const userRoute = require('./routers/userRoute');

app.use(express.json()); //untuk memparsing aplikasi/json
app.use(express.urlencoded({ extended: true }));

// DIbawah ini adalah syntax middleware
// Pastikan memasang middlewarenya terselbih dahulu sebelum route nya
const myLogger = function (req, res, next) {
     // console.log('LOGGED')
     req.time = new Date();
     next()
}

// dibawah ini cara memasang middleware nya
app.use(myLogger);

// Setting View Engine
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
     // console.log('Hello Rizky...');
     // res.send('Hello World!');
     const kelas = {
          id: 1,
          nama: 'JavaScipt',
          date: req.time.toString()
     }
     // res.json(kelas);

     res.render('pages/index', {kelas: kelas});
})

app.get('/about', (req, res) => {
     // res.send('This page about me...');
     res.render('pages/about');
})

app.get('/about-expressjs', (req, res) => {
     res.redirect('http://expressjs.com/')
});

app.use(userRoute);


app.listen(port, () => {
     console.log(`Example app listening on port ${port}`);
});
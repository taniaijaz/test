const config = require("./config/keys");
const express=require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const expressLayouts=require('express-ejs-layouts');
const path=require('path');

const app=express();

//EJS MiddleWare
app.use(express.static(path.join(__dirname,"views")));

app.use(expressLayouts);
app.use(express.static(path.join(__dirname,"views")));
app.set('view engine','ejs');

//Body Parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Routes
app.use('/',require('./routs/index'));
app.use('/users',require('./routs/users'));
//Mongo Connection
mongoose
  .connect(config.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Database Connection Established!"))
  .catch(err => console.log(err));
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
















//Server is Listening
const PORT=process.env.PORT||5000;
app.listen(PORT,console.log(`server is Running on port ${PORT}`))
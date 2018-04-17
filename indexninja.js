const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(BodyParser.json());
app.use('/api',routes);

app.use(function(err,req,res,next){
res.status(422).send({error:err.message});
});

app.listen(process.env.port || 4000,function(){
console.log("request listener at server");
});
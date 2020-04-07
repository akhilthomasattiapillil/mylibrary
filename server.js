require('dotenv').config()

const NODEENV = process.env.NODEENV;

//if (NODEENV !== 'production'){
//   require('dotenv').parse()    
//}
const express = require('express')
const app = express()
const expresslayouts = require('express-ejs-layouts')

const indexrouter = require('./routes/index')

app.set('view engine','ejs')
app.set('views',__dirname+'/views') 
app.set('layout','layouts/layout')
app.use(expresslayouts)
app.use(express.static('public'))

const hostname = process.env.HOST;
const DATABASE = process.env.DATABASE;
const port = process.env.PORT;

//console.log(hostname);
//console.log(DATABASE);
//console.log(port);

const mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost/mylibraryapp', {useNewUrlParser: true});
mongoose.connect(DATABASE,{ useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))


app.use('/',indexrouter)
app.listen(process.env.PORT || 3000)


var express = require('express');
var router = express.Router();
var path = require('path');
const app =express()
const userRouter = require('./routes/users')
app.set('view engine','pug')
port = 3000
//app.set('views', path.join(__dirname, 'views'));
app.get('/',(req,res)=>{
  console.log('Here')
  //res.sendStatus(200)
  res.render('index')
}) 
 
app.use('/users',userRouter)
app.listen(port)
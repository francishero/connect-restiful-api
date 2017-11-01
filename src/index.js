import express from 'express'
import constants from './config/constants'
import './config/databases'
import middlewareConfig from './config/middlewares'
import apiRoutes from './modules' //javascript will know to get index.js
import httpStatus from 'http-status'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import {logger} from './config/logger'
// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar("f2048a57704e450d8dfa480fb5b901c0");

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

const app=express();

//middleware
middlewareConfig(app)


// app.get('/cookie', function(req, res) {
//   console.log('Cookies: ', req.cookies);
//   res.end();
// })
//routes
app.get('/',(req,res)=>{
  res.render('Welcome to connect-api')
})
apiRoutes(app)

//catch 404 and send to error handler
app.use((req,res,next)=>{
  const err=new Error('NOT_FOUND')
  err.status=404
  next(err)
})

//error handler
app.use((err,req,res,next)=>{
  const error=app.get('env')==='development' ? err:{}
  const status=err.status || 500
  //client
  res.status(status).json({
    code:4, //my error code
    error:{
      message:error.message,
      stack:error
    }
  })
})


const PORT=constants.PORT
app.listen(PORT,(err)=>{
  if(err){
    console.log(err)
  }
  console.log(`Server running on port ${PORT}
              ********************************
              running on ${process.env.NODE_ENV}
  `)
})
export default app;


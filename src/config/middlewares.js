import morgan from 'morgan'
import compression from 'compression'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import constants from './constants'
import mongoose from 'mongoose'
import auth from './wechat.auth'
import session from 'express-session'
import logger from './logger'
const status_monitor=require('express-status-monitor')()
const MongoStore=require('connect-mongo')(session)
//promise error fix
mongoose.Promise=global.Promise

try{
  mongoose.connect(constants.MONGO_URL)
}
catch(err){
  mongoose.createConnection(constants.MONGO_URL)
}
mongoose.connection
    .once('open',()=>console.log('MONGODB connected'))



const isDev=process.env.NODE_ENV==='development'
const isProd=process.env.NODE_ENV==='production'

export default app=>{
  if(isProd){
    app.use(compression())
    app.use(helmet())
    app.use(morgan('combined',{stream:logger.stream}))
  }
  //monitor express app by going to /status
  app.use(status_monitor)
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended:true})) //for postman --to use x-www-form
  var secret = 'sdawdawdawdwd'
//  app.use(session({
//    secret:secret,
//    resave: false,
//    saveUninitialized: false,
//    store: new MongoStore({ mongooseConnection: mongoose.connection,ttl:360*34*60*60 })

//  }))


  if(isDev){
    app.use(morgan('dev'))
  }
}

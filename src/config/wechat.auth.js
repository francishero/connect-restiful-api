//// auth
//import app from '../index'
//import Session from '../services/auth.model'
//import httpStatus from 'http-status'
//
//exports.auth_func=function(req, res, next){
//
//  if (req.session.openid) {
//    next();
//  } else {
//    const {cookie}=req.cookies
//    console.log('the cookie is '+cookie)
//    if(cookie.rd_session)
//    {
//      const obj=Session.find()
//      if(openid) {
//        req.session.openid = openid;
//        next()
//      }
//    }
//
//    res.status(403).json({
//      message:'please log in'
//    })
//  }
//}

import User from '../modules/users/user.model'
import express from 'express'
/**
	 * @api {post} /api/v1/users/auth The authentication route
	 * @apiDescription Log in  a new wechat user using the auth token obtained from /api/v1/users/auth
   *  user must send wechat body with openid
	 * @apiName auth
	 * @apiGroup auth
	 *
	 * @apiParam {String} token The unique token from /api/v1/users/auth
	 *
	 * @apiSampleRequest /api/v1/users/login
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "code":0,
            "token":"oLlak7D-kakkak0D_CvN5ohOmUJd6LLkezs44"
   *    }
	 */
module.exports=async function (req,res,next){
  console.log('in auth===',req.body)
  console.log('in auth-->header==',req.headers.auth)
   const {auth}=req.headers
   console.log('in auth-->header-->track--auth==',auth)
    if(!auth){
        res.sendStatus(403)
        res.end()
    }
else{
    const user= await User.findById(auth)
    if(!user){
        res.sendStatus(403)
        res.end()
    }
    else{
        req.user=user;
        next()
    }
}
  // if(req.session.userId){
  //   next()
  // }else{
  //   res.sendStatus(403)
  // }
}

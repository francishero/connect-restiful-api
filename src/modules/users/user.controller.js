import User from './user.model'
import Post from '../posts/post.model'
import Address from '../address/address.model'
import httpStatus from 'http-status'
import wechatService from '../../services/wechat'
/**
	 * @api {get} /api/v1/users Get all users
	 * @apiDescription Get all users
	 * @apiName getAllUsers
	 * @apiGroup users
	 *
	 * @apiParam {Number} limit The number of posts to return
	 * @apiParam {Number} skip The number of posts to skip
	 *
	 * @apiSampleRequest /api/v1/users
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *      "code":0,
   *      "data":[{},{}]
	 *     }
	 */

 export async function getAllUsers(req, res, next) {
   const limit = parseInt(req.query.limit);
   const skip = parseInt(req.query.skip);
   try {
     const users = await User.list({ limit, skip });
     res.status(httpStatus.OK).json({ code: 0, data: users });
   } catch (err) {
     console.log(err);
   }
 }
/**
	 * @api {get} /ap1/v1/users/:userId Get a User's information
	 * @apiDescription Get a User's information using the unique id
	 * @apiName getUser
	 * @apiGroup users
	 *
	 * @apiParam {String} id The unique ID
	 *
	 * @apiSampleRequest /api/v1/users/:userId
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
   * {
   * "code":0,
   * data:[{}]
   * }
  *
	 */
export async function getUser(req, res, next) {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).populate("qrcode");
    res.status(httpStatus.OK).json({
      code: 0,
      data: user.toJSON()
    });
  } catch (err) {
    console.log(err);
  }
}
/**
	 * @api {post} /api/v1/users/auth Registers a new wechat user using the code
	 * @apiDescription Register a new wechat user using the auth code and return a token
	 * @apiName getOpenid
	 * @apiGroup users
	 *
	 * @apiParam {Number} code The unique code from wx.login()
	 *
	 * @apiSampleRequest /api/v1/users/auth
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
   *        "code":0,
	 *       "token": "oLlak7D-kakkak0D_CvN5ohOmUJd6LLkezs44"
   *    }
	 */

export async function getOpenid(req,res,next)
{
    const {code}=req.body
    if(!code){
      return;
    }

    const response= await wechatService.getAuthCode(code)

    console.log(response.openid)
    if(response.errmsg){
        res.status(400).json({
          code:response.errcode,
          message:response.errmsg
        })
         return res.end()
    }
   return  res.status(200).json({
      code:0,
      token:response.openid
    })
}
/**
	 * @api {post} /api/v1/users/login Logs in  a new wechat user using the token
	 * @apiDescription Log in  a new wechat user using the auth token obtained from /api/v1/users/auth
   *  user must send wechat body with openid
	 * @apiName login
	 * @apiGroup users
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

export async function login(req,res,next)
{
console.log('wechat===',req.body.wechat)
const {wechat}=req.body
    const user= await User.findOneAndUpdate({'wechat.openid':wechat.openid},{
        wechat,

    },{upsert:true});
   // req.session.userId = user._id
     res.status(200).json({
        code:0,
        token:user._id
    })
}
/* for testing */
export async function addUser(req,res,next)
{
  const user= await User.createUser(req.body)
  res.status(200).json({
    code:0,
    data:user
  })
}

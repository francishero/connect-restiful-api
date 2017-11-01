import Qrcode from './qrcode.model'
import httpStatus from 'http-status'
import User from '../users/user.model'
/**
	 * @api {post} /api/v1/qrcode Add a new wechat_Qrcode
	 * @apiDescription Add a new wechat_qrcode for a given user
	 * @apiName addQrcode
	 * @apiGroup qrcode
	 *
	 * @apiParam {String} path The path to the qrcode image
	 *
	 * @apiSampleRequest /api/v1/qrcode
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "code":0,
   *        "data":[]
   *    }
	 */
export async function addQrcode(req,res,next) {
  const qrcode= await Qrcode.createQrcode(req.body,req.user._id)
  const user= await User.findById(req.user._id)
  user.qrcode.push(qrcode)
  await user.save()
  res.status(httpStatus.CREATED).json({
    code:0,
    data:qrcode
  })
}
/**
	 * @api {get} /ap1/v1/qrcode/:qrcodeId Get a User's Qrcode information
	 * @apiDescription Get a User's qrcode information using the unique id
	 * @apiName getQrcode
	 * @apiGroup qrcode
	 *
	 * @apiParam {String} id The unique ID
	 *
	 * @apiSampleRequest /api/v1/qrcode/:qrcodeId
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
  *
	 */
export async function getQrcode(req,res,next){
  const {id}=req.params
  const qrcode= await Qrcode.findById(id)
  res.status(httpStatus.OK).json({
    code:0,
    data:qrcode
  })
}
/**
	 * @api {patch} /api/v1/qrcode Updates a wechat_Qrcode
	 * @apiDescription Updates a wechat_qrcode for a given user
	 * @apiName updateQrcode
	 * @apiGroup qrcode
	 *
	 * @apiParam {String} path The path to the qrcode image
	 *
	 * @apiSampleRequest /api/v1/qrcode
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "code":0,
   *        "data":[]
   *    }
	 */
export async function updateQrcode(req,res,next){
  const {id}=req.params
  const qrcode= await Qrcode.findById(id)
  if(qrcode.user.equals(req.user._id))
  {
    Object.keys(req.body).forEach(key=>{
      qrcode[key]=req.body[key]
    })
    await qrcode.save()
  }else{
    res.status(httpStatus.UNAUTHORIZED)
  }
  res.status(httpStatus.OK).json({
    code:0,
    data:qrcode
  })
}

/**
	 * @api {delete} /api/v1/qrcode/:qrcodeIs Deletes a wechat_Qrcode
	 * @apiDescription Delete a wechat_qrcode for a given user
	 * @apiName deleteQrcode
	 * @apiGroup qrcode
	 *
	 * @apiParam {String} id The unique ID of the given User's qrcode
	 *
	 * @apiSampleRequest /api/v1/qrcode/:qrcodeId
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "code":0,
   *        "message:"sucessfully deleted qrcode"
   *    }
	 */
export async function deleteQrcode(req,res,next){
  const {id}=req.params
  const qrcode= await Qrcode.findById(id)
  if(qrcode.user.equals(req.user._id))
  {
    await qrcode.remove()
  }else{
    res.status(httpStatus.UNAUTHORIZED)
  }
  res.status(httpStatus.OK).json({
    code:0
  })
}
/**
	 * @api {get} /api/v1/qrcode Get all wechat_Qrcodes
	 * @apiDescription Get all wechat_Qrcodes of users
	 * @apiName getAllQrcode
	 * @apiGroup qrcode
	 *
	 * @apiParam {Number} limit The number of qrcodes to return
	 * @apiParam {Number} skip The number of qrcodes to skip
	 *
	 * @apiSampleRequest /api/v1/qrcode
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *      "code":0,
   *      "data":[{},{}]
	 *     }
	 */
export async function getAllQrcode(req,res,next)
{
  const limit=parseInt(req.query.limit)
  const skip=parseInt(req.query.skip)
  const qrcodes= await Qrcode.list({limit,skip})
  res.status(httpStatus.OK).json({
    code:0,
    data:qrcodes
  })
}

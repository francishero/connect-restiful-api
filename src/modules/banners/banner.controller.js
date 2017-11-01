import Banner from './banner.model'
import httpStatus from 'http-status'
import user from '../users/user.model'

/**
	 * @api {post} /api/v1/banner Add a new banner
	 * @apiDescription Add a new banner
	 * @apiName addBanner
	 * @apiGroup banners
	 *
	 * @apiParam {String} title Title of post
	 * @apiParam {Number} minPrice Price
	 * @apiParam {String} characteristic Simple description of the post
	 * @apiParam {String} picUrl Image of the banner
	 * @apiParam {String} name The name of the banner
   * @apiParam {Number} businness The category of the banner
	 *
	 * @apiSampleRequest /api/v1/banners
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "code":0,
   *        "data":[]
   *    }
	 */
export async function postBanner(req,res,next)
{
    /*no try catch express-promise-router handles it */
    const banner= await Banner.createBanner(req.body)
    res.status(httpStatus.OK).json({
      code:0,
      data:banner
    })

}
/**
	 * @api {get} /api/v1/banners Get all banners
	 * @apiDescription Get all banners
	 * @apiName getAll
	 * @apiGroup banners
	 *
	 * @apiParam {Number} limit The number of posts to return
	 * @apiParam {Number} skip The number of posts to skip
	 *
	 * @apiSampleRequest /api/v1/banners
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *      "code":0,
   *      "data":[{},{}]
	 *     }
	 */
export async function getAll(req,res,next)
{
  const limit=parseInt(req.query.limit)
  const skip=parseInt(req.query.skip)

  const banners = await Banner.list({limit,skip})
  res.status(httpStatus.OK).json({
    code:0,
    data:banners
  })
}
/**
	 * @api {get} /ap1/v1/posts/:id Get a Banner's information
	 * @apiDescription Get a Banners's information using the unique id
	 * @apiName getBanner
	 * @apiGroup banners
	 *
	 * @apiParam {String} id The unique ID
	 *
	 * @apiSampleRequest /api/v1/banners/:id
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
  *
	 */
export async function getBanner(req,res,next)
{
  const {id}=req.params
  const banner= await Banner.findById(id)
  res.status(httpStatus.OK).json({
    code:0,
    data:banner
  })
}

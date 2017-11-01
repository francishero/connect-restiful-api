import Suggestion from './suggestion.model'
import httpStatus from 'http-status'
import User from '../users/user.model'
/**
	 * @api {post} /api/v1/suggestions Add a new suggestion
	 * @apiDescription User can add a new suggestion to help improve the mini app
	 * @apiName addSuggestion
	 * @apiGroup suggestions
	 *
	 * @apiParam {String} content The content of the suggestion
	 *
	 * @apiSampleRequest /api/v1/suggestions
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "code":0,
   *        "data":[]
   *    }
	 */

export async function postSuggestion(req,res,next)
{
  console.log(req.user)
  const suggestion= await Suggestion.createSuggestion(req.body,req.user._id)
  res.status(httpStatus.CREATED).json({
    code:0,
    data:suggestion.toJSON()
  })
}
/*================================
/api/v1/suggestions/:suggestionId
{get} returns a suggestion with :id
==================================*/

export async function getSuggestion(req,res,next)
{
  const {suggestionId}=req.params
  const suggestion= await Suggestion.findById(suggestionId).populate('user')
  res.status(httpStatus.OK).json({
    code:0,
    data:suggestion
  })
}
/*====================================
/api/v1/suggestions {get}
get all suggestions
=====================================*/

export async function getAllSuggestions(req,res,next)
{
  const limit=parseInt(req.query.limit)
  const skip=parseInt(req.query.skip)
  const suggestions= await Suggestion.list({limit,skip})

  res.status(httpStatus.OK).json({
    code:0,
    data:suggestions
  })
}

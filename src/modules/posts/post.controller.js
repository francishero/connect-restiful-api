import Post from './post.model'
import httpStatus from 'http-status'
import User from '../users/user.model'
require('mongoose').set('debug', true);

/**
	 * @api {get} /ap1/v1/posts/:id Get a User's information
	 * @apiDescription Get a User's information using the unique id
	 * @apiName getPost
	 * @apiGroup posts
	 *
	 * @apiParam {String} id The unique ID
	 *
	 * @apiSampleRequest /api/v1/posts/:id
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
  *
	 */
export async function getPost(req,res,next)
{
   const {postId}=req.params
  const promise=await Promise.all([
    User.findById(req.user._id),
     Post.findById(postId) .populate({
     path: 'user',
     populate: {
       path: 'qrcode',
       model: 'Qrcode'
     }
  })
  ])
  //promise[0] is the current logged in user
  const favorite=promise[0]._favorites.isPostIsFavorite(postId)
  //promise[1] has the post
  const post=promise[1]
  res.status(httpStatus.OK).json({
    ...post.toJSON(),
    favorite
  })
}
/**
	 * @api {post} /api/v1/posts Add a new post
	 * @apiDescription Add a new post
	 * @apiName addPost
	 * @apiGroup posts
	 *
	 * @apiParam {String} title Title of post
	 * @apiParam {Number} price Price
	 * @apiParam {String} description Simple description of the post
	 * @apiParam {Array} pics Images of the product
	 * @apiParam {Array} tags Tags for the post used for search
   * @apiParam {Number} categoryIndex The category of the post
	 *
	 * @apiSampleRequest /api/v1/posts
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "code":0,
   *        "data":[]
   *    }
	 */
export async function addPost(req,res,next)
{
  const post= await Post.createPost(req.body,req.user._id)
  res.status(httpStatus.CREATED).json({
    code:0,
    data:post
  })
}
/**
	 * @api {get} /api/v1/posts Get all posts
	 * @apiDescription Get all posts
	 * @apiName getAllPosts
	 * @apiGroup posts
	 *
	 * @apiParam {Number} limit The number of posts to return
	 * @apiParam {Number} skip The number of posts to skip
	 *
	 * @apiSampleRequest /api/v1/posts
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *      "code":0,
   *      "data":[{},{}]
	 *     }
	 */
export async function getAllPost(req,res,next)
{
  console.log('current user is ',req.user)
  const limit=parseInt(req.query.limit)
  const skip=parseInt(req.query.skip)
  const promise= await Promise.all([
    User.findById(req.user._id),
     Post.list({limit,skip})
  ])
const posts=promise[1].reduce((arr,post)=>{
  const favorite=promise[0]._favorites.isPostIsFavorite(post._id)
  arr.push({
    ...post.toJSON(),
    favorite
  })
  return arr;
},[])
  res.status(httpStatus.OK).json({
    code:0,
    data:posts
  })
}
/**
	 * @api {post} /api/v1/posts/category
	 * @apiDescription Gets all posts with the given categoryIndex
	 * @apiName getPostByCategoryIndex
	 * @apiGroup posts
	 *
	 * @apiParam {Number} categoryIndex  The categoryIndex of the post
	 * @apiSampleRequest /api/v1/posts/category?categoryIndex=2
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "meta": {
	 *       	"code": 0,
	 *        "data":[{
   *        },{}]
	 *     }
	 */
export async function getPostByCategoryIndex(req,res,next)
{
  console.log('---categoryIndex---',req.query.categoryIndex)
  console.log('--typeof categoryIndex---',typeof req.query.categoryIndex)
  const categoryIndex=parseInt(req.query.categoryIndex)
  console.log('----after conversion -----')
  console.log('--typeof categoryIndex---',typeof categoryIndex)

//ranking algorithm
/*
favoriteCount*0.5+0.75/1+time_of_creation*time_of_creation*0.4
*/
  const posts= await Post.aggregate([{$match:{categoryIndex:parseInt(req.query.categoryIndex)}}
  ,{$project:
    {title:1,favoriteCount:1,createdAt:1,
    price:1,description:1,categoryIndex:1,pics:1,tags:1,user:1,favorite:1,

    ranking:{$divide:[{$add:[{$multiply:["$favoriteCount",0.5]},0.75]},
    {$add:[1,
      {$multiply:[0.4,{$subtract:[new Date(),"$createdAt"]},{$subtract:[new Date(),"$createdAt"]}]}]}]}
    }},{$sort:{ranking:-1}}])


  res.status(httpStatus.OK).json({
    code:0,
    data:posts
  })
}
/**
	 * @api {delete} /api/v1/posts Delete a post
	 * @apiDescription Deletes a post of a given unique ID
	 * @apiName deletePost
	 * @apiGroup posts
	 *
	 * @apiParam {String} id The given post's ID
	 * @apiSampleRequest /api/v1/posts/:postId
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "code":0,
   *        "message":"successfully deleted post"
	 *     }
	 */
export async function deletePost(req,res,next)
{
  const post= await Post.findById(req.params.postId)
  if(post.user.equals(req.user._id))
  {
    await post.remove()
  }
  res.status(httpStatus.OK).json({
    code:0,
    message:'successfully deleted post'
  })
}
/**
	 * @api {patch} /api/v1/posts Updates a post
	 * @apiDescription Updates a post of given ID
	 * @apiName updatePost
	 * @apiGroup posts
	 *
	 * @apiParam {String} title Title of post
	 * @apiParam {Number} price Price
	 * @apiParam {String} description Simple description of the post
	 * @apiParam {Array} pics Images of the product
	 * @apiParam {Array} tags Tags for the post used for search
   * @apiParam {Number} categoryIndex The category of the post
	 *
	 * @apiSampleRequest /api/v1/posts/:postId
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "code":0,
   *        "data":[]
   *    }
	 */

export async function updatePost(req,res,next)
{
  const {postId}=req.params
  const post= await Post.findById(postId)
  if(post.user.equals(req.user._id))
  {
    Object.keys(req.body).forEach(key=>{
      post[key]=req.body[key]
    })
    await post.save()
  }else{
    res.status(httpStatus.UNAUTHORIZED)
  }
  res.status(httpStatus.OK).json({
    code:0,
    data:post
  })
}
/**
	 * @api {post} /api/v1/posts Favorite a post
	 * @apiDescription Favorite a post of a given ID
	 * @apiName favoritePost
	 * @apiGroup posts
	 *
	 * @apiParam {String} id The Id of the post
	 *
	 * @apiSampleRequest /api/v1/posts/:postId/favoritePost
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "code":0,
   *    }
	 */
export async function favoritePost(req,res)
{
  const {postId}=req.params
  const user= await User.findById(req.user._id)
  //now we need to add this postId to the users list of liked posts
  await user._favorites.posts(postId)
  res.status(httpStatus.OK).json({
    code:0
  })


}


	/**
	 * @api {post} /api/v1/posts/search Search for posts with given keyword
	 * @apiDescription Returns all posts that match a given search keyword
	 * @apiName searchPost
	 * @apiGroup posts
	 *
	 * @apiParam {String} keyword The search keyword
	 * @apiSampleRequest /api/v1/posts/search
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "code":0,
   *        "data":[{},{}]
	 *     }
	 */
export async function  searchPost(req,res,next)
{
  const {keyword}=req.query
  const posts= await Post.find(
    {
    $text:{
      $search:keyword
    }
  },{
    score:{$meta:'textScore'}
  })
    .sort({
      score:{$meta:'textScore'}
    })
    .limit(5)
  res.status(httpStatus.OK).json({
    code:0,
    data:posts
  })
}

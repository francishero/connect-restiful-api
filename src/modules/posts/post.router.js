import express from 'express'
const router=require('express-promise-router')()
import * as postController from './post.controller'
import auth from '../../services/auth'

router.route('/:postId')
      .get(auth,postController.getPost)
      .delete(auth,postController.deletePost)
      .patch(auth,postController.updatePost)
router.route('/')
      .post(auth,postController.addPost) //to add a post a user must authenticate
      .get(auth,postController.getAllPost)
//api/v1/posts/category?categoryIndex=2
router.route('/category')
      .post(auth,postController.getPostByCategoryIndex)
router.route('/:postId/favoritePost')
      .post(auth,postController.favoritePost)
router.route('/search')
      .post(postController.searchPost)
export default router;


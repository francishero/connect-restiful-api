import express from 'express'
import * as userController from './user.controller'
const router=require('express-promise-router')()
import auth from '../../services/auth'




router.route('/auth')
      .post(userController.getOpenid)
router.route('/login')
      .post(userController.login)
router.route('/')
      .get(userController.getAllUsers)
      .post(auth,userController.addUser)
router.route('/:userId')
      .get(userController.getUser)
export default router;

import express from 'express'
import validate from 'express-validation'
import * as bannerController from './banner.controller'
import  bannerValidation from './banner.validations'
const router=require('express-promise-router')()

router.route('/')
      .post(validate(bannerValidation.postBanner),bannerController.postBanner)
      .get(bannerController.getAll)
router.route('/:id')
      .get(bannerController.getBanner)
export default router;

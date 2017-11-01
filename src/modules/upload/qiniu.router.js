const router=require('express-promise-router')()
import * as qiniuController from './qiniu.controller'

router.route('/')
      .get(qiniuController.getUptoken)

export default router;

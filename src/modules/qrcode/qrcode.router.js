const router=require('express-promise-router')()
import * as qrcodeController from './qrcode.controller'
import auth from '../../services/auth'

router.route('/')
      .post(auth,qrcodeController.addQrcode)
      .get(auth,qrcodeController.getAllQrcode)
router.route('/:id')
      .get(auth,qrcodeController.getQrcode)
      .patch(auth,qrcodeController.updateQrcode)
      .delete(auth,qrcodeController.deleteQrcode)

export default router;

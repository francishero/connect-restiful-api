const router=require('express-promise-router')()
import * as addressController from './address.controller'
import auth from '../../services/auth'

router.route('/')
      .post(auth,addressController.addAddress) //to post an address you must authenticate
      .get(addressController.getAddresses)
router.route('/:addressId')
      .get(addressController.getAddress)
      .patch(auth,addressController.updateAddress) //to update an address you must authenticate
export default router;

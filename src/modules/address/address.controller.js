import Address from './address.model'
import httpStatus from 'http-status'

/*=============================
/api/v1/address {post}
create an address for a user
==============================*/
export async function addAddress(req,res,next)
{
  const address=  await Address.createAddress(req.body,req.user._id)
  res.status(httpStatus.OK).json({
    code:0,
    data:address
  })
}
/*=============================
/api/v1/address/:id {get}
gets  address for a user id
==============================*/

export async function getAddress(req,res,next)
{
  const {addressId}=req.params
  const address= await Address.findById(addressId)
  res.status(httpStatus.OK).json({
    code:0,
    data:address
  })
}
/*=============================
/api/v1/address {get}
gets  all  addresses for a user
==============================*/
export async function getAddresses(req,res,next)
{

  const limit=parseInt(req.query.limit)
  const skip=parseInt(req.query.skip)
  try{
  const addresses= await Address.list({limit,skip})
  res.status(httpStatus.OK).json({
    code:0,
    data:addresses
  })}
  catch(err){
    console.log(err.message)
  }
}

/*=============================
/api/v1/address/:id {patch}
updates an address
==============================*/
export async function updateAddress(req,res,next)
{
  const {addressId}=req.params
  const address= await Address.findById(addressId)
  if(address.user.equals(req.user._id)){
    /* ok lets update the fields you want */
  Object.keys(req.body).forEach(key=>{
    address[key]=req.body[key]
  })
  /*now lets not forget to save your changes to the db */
  res.status(httpStatus.OK).json( await address.save())
}
else{
  res.status(httpStatus.UNAUTHORIZED)
}
}

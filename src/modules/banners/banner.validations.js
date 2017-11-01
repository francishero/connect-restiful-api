import Joi from 'joi'


export default{
  postBanner:{
    body:{
      businessId:Joi.number().required(),
      picUrl:Joi.string().required(),
      title:Joi.string().required()
    }
  },
}

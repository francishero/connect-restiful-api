
const router=require('express-promise-router')()
import userRoutes from './users/user.router'
import bannerRoutes from './banners/banner.router'
import postRoutes from './posts/post.router'
import addressRoute from './address/address.router'
import suggestionRoutes from './suggestions/suggestion.router'
import qiniuRoutes from './upload/qiniu.router'
import qrcodeRoutes from './qrcode/qrcode.router'
import auth from '../services/auth'

export default app=>{
  app.use('/api/v1/users',userRoutes)
  app.use('/api/v1/banners',bannerRoutes)
  app.use('/api/v1/posts',auth,postRoutes)
  app.use('/api/v1/address',auth,addressRoute)
  app.use('/api/v1/suggestions',auth,suggestionRoutes)
  app.use('/api/v1/uptoken',qiniuRoutes)
  app.use('/api/v1/qrcode',auth,qrcodeRoutes)

 //app.use('/api/v1/authcode',authRoutes)
}

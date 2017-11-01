import mongoose,{Schema} from 'mongoose'
const {ObjectId}=mongoose.Schema.Types
const qrcodeSchema=new Schema({
  path:{
    type:String,
    trim:true,
    required:[true,'path to the qrcode is required']
  },
  wechat_id:{
    type:String,
    trim:true
  },
  user:{
    type:ObjectId,
    ref:'User'
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
  updatedAt:{
    type:Date
  }
})


qrcodeSchema.methods={
  toJSON(){
    return{
      _id:this._id,
      path:this.path,
      wechat_id:this.wechat_id,
      user:this.user,
      createdAt:this.createdAt,
      updatedAt:this.updatedAt
    }
  }
}
qrcodeSchema.statics={
  list({skip=0,limit=5}={}){
    return this.find()
              .sort({craetedAt:-1})
              .skip(skip)
              .limit(limit)

  },
  createQrcode(args,user){
    return this.create({
      ...args,
      user
    })
  }
}

export default mongoose.model('Qrcode',qrcodeSchema);

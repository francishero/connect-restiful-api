import mongoose,{Schema} from 'mongoose'
const {ObjectId}=mongoose.Schema.Types
const addressSchema=new Schema({
  username:{
    type:String,
    trim:true
  },
  phone:{
    type:Number,
    trim:true
  },
  user:{
    type:ObjectId,
    ref:'User'
  },
  wechat_qrcode:{
    type:ObjectId,
    ref:'Qrcode'
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
  updatedAt:{
    type:Date,
    default:Date.now
  }
})

//statics are methods on Address
addressSchema.statics={
  list({skip=0,limit=0}={})
  {
    return this.find()
              .sort({createdAt:-1})
              .skip(skip)
              .limit(limit)
              .populate('user wechat_qrcode')

  },
  createAddress(args,user){
    return this.create({
      ...args,
      user
    })
  }
}
addressSchema.methods={
  toJSON(){
    return{
      _id:this._id,
      username:this.username,
      phone:this.phone,
      user:this.user,
      createdAt:this.createdAt,
      wechat_qrcode:this.wechat_qrcode,
      updatedAt:this.updatedAt
    }
  }
}

export default mongoose.model('Address',addressSchema);

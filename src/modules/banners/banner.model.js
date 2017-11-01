import  mongoose ,{Schema} from 'mongoose'
const {ObjectId}=mongoose.Schema.Types

const bannerSchema=new Schema({
  businessId:{
    type:Number,
    default:0,
    required:[true,'businessId is required']
  },
  dateAdd:{
    type:Date,
    default:Date.now
  },
  dateUpdate:Date,
  picUrl:{
    type:String,
    trim:true,
    required:[true,'picUrl is required']
  },
  remark:String,
  status:{
    type:Number,
    default:0
  },
  title:{
    type:String,
    required:[true,'title is required'],
    trim:true
  },
  user:{
    type:ObjectId,
    ref:'User'
  },
  name:{
    type:String,
    trim:true
  },
  minPrice:{
    type:Number,
    default:0
  },
  characteristic:{
    type:String,
    trim:true,
    default:''
  }
})

bannerSchema.statics={
  createBanner(args){
    return this.create({
      ...args,
    })
  },
  /*when users become many we need to paginate */
  list({skip=0,limit=5}={})
  {
    return this.find()
              .sort({createdAt:-1})
              .skip(skip)
              .limit(limit)
              .populate('user') /*info for the user who sent ad */
  }
}

export default mongoose.model('Banner',bannerSchema);

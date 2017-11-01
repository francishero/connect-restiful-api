import mongoose ,{Schema} from 'mongoose'
import Qrcode from '../qrcode/qrcode.model'
const {ObjectId}=mongoose.Schema.Types

const postSchema=new Schema({
  title:{
    type:String,
    trim:true,

  },
  price:{
    type:Number,
    default:0
  },
  description:{
    type:String,
    trim:true,
    default:''
  },
  categoryIndex:{
    type:Number,
    default:0
  },
  user:{
    type:ObjectId,
    ref:'User'
  },
  pics:[{
    type:String, //picture key
    trim:true,
  }],
  //pics['tmp1','tmp2']
  tags:[String],
  createdAt:{
    type:Date,
    default:Date.now
  },
  updatedAt:Date,
  //how many users liked this post?
  favoriteCount:{
    type:Number,
    default:0
  },


})
//indexing for faster search
postSchema.index({
  title:'text',
  description:'text',
  tags:'text'
})

//statics are methods on Post
postSchema.statics={
  list({skip=0,limit=0}={}){
    return this.find()
              .sort({createdAt:-1,favoriteCount:-1})
              .skip(skip)
              .limit(limit)
              .populate('user')
  },
  createPost(args,user){
    return this.create({
      ...args,
      user
    })
  },
    //the favoriteCount function will be on the post schema itself
  incFavoriteCount(postId)
  {
    return this.findByIdAndUpdate(postId,{$inc:{favoriteCount:1}})
  },
  decFavoriteCount(postId)
  {
    return this.findByIdAndUpdate(postId,{$inc:{favoriteCount:-1}})
  },
  getTagsList(){
    return this.aggregate([
      {$unwind:'$tags'},
      {$group:{_id:'$tags',count:{$sum:1}}},
      {$sort:{count:-1}}
    ])
  }

}
postSchema.methods={
  toJSON(){
    return{
      _id:this._id,
      title:this.title,
      price:this.price,
      description:this.description,
      categoryIndex:this.categoryIndex,
      pics:this.pics,
      createdAt:this.createdAt,
      favoriteCount:this.favoriteCount,
      tags:this.tags,
      user:this.user,
      qrcode:this.qrcode


    }
  }
}

export default mongoose.model('Post',postSchema);



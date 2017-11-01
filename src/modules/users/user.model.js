import mongoose,{Schema} from 'mongoose'
import validator from 'validator'
import {passwordRegex} from './user.validations'
import Address from '../address/address.model'
import Post from '../posts/post.model'
const {ObjectId}=mongoose.Schema.Types
debugger;
const userSchema=new Schema({
  name:String, //just for testing
  posts:[{
    type:ObjectId,
    ref:'Post'
  }],
  address:{
    type:ObjectId,
    ref:'Address'
  },
  qrcode:[{
    type:ObjectId,
    ref:'Qrcode'
  }],
  wechat:Object,
  createdAt:{
    type:Date,
    default:Date.now
  },
  updatedAt:Date,
  favorites:{
    posts:[{
     type:ObjectId,
      ref:'Post'
    }]
  }
})

//statics are methods on User
userSchema.statics={
  list({skip=0,limit=0}={})
  {
    return this.find()
              .sort({createdAt:-1})
              .skip(skip)
              .limit(limit)
              .populate('qrcode')

  },
  createUser(args){
    return this.create({
      ...args,

    })
  }
}
userSchema.methods={
  toJSON(){
    return{
      _id:this._id,
      name:this.name,
      posts:this.posts,
      createdAt:this.createdAt,
      favorites:this.favorites,
      qrcode:this.qrcode
    }
  },
    _favorites:
  {
    async posts(postId){
      if(this.favorites.posts.indexOf(postId)>=0)
    {
      /* a Post is identified by the postId so we remove it we remove the post */
      this.favorites.posts.remove(postId)
      //the post's favoriteCount is reduced
      try{
        await Post.decFavoriteCount(postId)
      }
      catch(err)
      {
        console.log(err)
      }

    }
    else{
      this.favorites.posts.push(postId)
      try{
      await Post.incFavoriteCount(postId)
    }
    catch(err){
      console.log(err)
    }
    }
    /* save the currrent state to the db */
    return  this.save()
  },
  /*if the post is there in the users favorite posts return true */
  isPostIsFavorite(postId){
    if(this.favorites.posts.indexOf(postId)>=0)
    {
      return true;
    }
    return false;
  }


  }
}
export default mongoose.model('User',userSchema)

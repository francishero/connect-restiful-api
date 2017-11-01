import mongoose,{Schema} from 'mongoose'
const {ObjectId}=mongoose.Schema.Types
import User from '../users/user.model'

const suggestionSchema=new Schema({
  content:{
    type:String,
    trim:true,
    required:[true,'content is required']
  },
  user:{
    type:ObjectId,
    ref:'User'
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
  //false==pending true==resolved
  status:{
    type:Number,
    default:false
  }
});

//statics are methods on Suggestion
suggestionSchema.statics={
  list({skip=0,limit=0}={})
  {
    return this.find()
              .sort({createdAt:-1})
              .skip(skip)
              .limit(limit)

  },
  createSuggestion(args,user){
    return this.create({
      ...args,
      user
    })
  }
}
suggestionSchema.methods={
  toJSON(){
    return{
      _id:this._id,
      content:this.content,
      status:this.status,
      user:this.user,
      createdAt:this.createdAt
    }
  }
}
export default mongoose.model('Suggestion',suggestionSchema);



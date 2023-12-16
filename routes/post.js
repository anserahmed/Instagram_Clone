const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

  picture: String,

  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },

  caption: String,

  date:{
    type: Date,
    default:Date.now,
  },

  likes:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    },
  ],
  posts: [{
    types: mongoose.Schema.Types.ObjectId ,
   }]
});
// userSchema.plugin(plm)
module.exports = mongoose.model("post", postSchema);
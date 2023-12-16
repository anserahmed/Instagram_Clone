const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

require('dotenv').config(); 

const atlasConnection = process.env.MONGODB_URI;

mongoose.connect(atlasConnection, { useNewUrlParser: true, useUnifiedTopology: 


const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  profileImage: String,
  bio : String,
  password : String,
  posts:[{
    type: mongoose.Schema.Types.ObjectId , 
    ref :"post",
   }]
});

userSchema.plugin(plm)
module.exports = mongoose.model("user", userSchema);

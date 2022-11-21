const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {database} = require('../../config/dataBase');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true
  },
  avatar:{
    type:String
  },
  type:{
    type:String,
    required:true
  },
  designation:{
    type:String,
    required:true
  },
  create:{
    type:String
  },
  data:{
      type:Object
  },
  secretQst:{
    type:Object
  }
});

module.exports = User = database.model("users", UserSchema);
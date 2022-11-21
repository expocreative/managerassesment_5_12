const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {database} = require('../../config/dataBase');

const KeySchema = new Schema({
  key: {
    type: String,
    required: true
  },
  type:{
    type:String,
    required:true
  }
});

module.exports = Keys = database.model("keys", KeySchema);
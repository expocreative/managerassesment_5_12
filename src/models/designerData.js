const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { database } = require('../../config/dataBase');

const DesignerDataSchema = new Schema({
    values:Array,
    key:String
 });

//Mongoose automatically looks for the plural, lowercased version of your model name
const DesignerData = database.model("dataDesigner", DesignerDataSchema);
module.exports = DesignerData;

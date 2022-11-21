const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {database} = require('../../config/dataBase');

const DesignerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    designation:{
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    activated:{
        type:Boolean
    },
    created:{
        type:Number
    },
    data:{
        type:Object
    }
});


module.exports = Designer = database.model("designers", DesignerSchema);
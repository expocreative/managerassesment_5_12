const mongoose = require('mongoose');
const config = require('config');

const connectDB = (url) => {
    return mongoose.createConnection(url, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex:true
    });
}

exports.database = connectDB(config.get("mongoURI1"));
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const accountSchema = new Schema({
    username: String,
    email: String,
    password: String,
    firstname: String,
    lastname: String,

});

accountSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Account', accountSchema)

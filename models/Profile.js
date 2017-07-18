const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const fitconnectionsSchema = new Schema ({
    username: {
        type: String,
        lowercase: true,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    profileimage: String,
    age: Number,
    workoutschedule: Array,
    gyms: Array,
    activities: Array,
})

const profileSchema = new Schema ({
    username: {
        type: String,
        lowercase: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    datejoined: Date,
    firstname: String,
    lastname: String,
    profileimage: String,
    age: {
        type: Number,
        min: 18,
        max: 100
    },
    workoutschedule: Array,
    gyms: Array,
    activities: Array,
    fitconnections: [fitconnectionsSchema]

})


// accountSchema.plugin(passportLocalMongoose);
// module.exports = mongoose.model('Account', accountSchema)
module.exports = mongoose.model('Profile', profileSchema)

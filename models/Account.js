const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const Profile = require('./Profile')

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
    location: Array,
    age: Number,
    gender: String,
    workoutschedule: Array,
    gyms: Array,
    activities: Array,
    goals: Array
})
//
// const profileSchema = new Schema ({
//     username: {
//         type: String,
//         lowercase: true,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     datejoined: Date,
//     firstname: String,
//     lastname: String,
//     profileimage: String,
//     age: {
//         type: Number,
//         min: 18,
//         max: 100
//     },
//     workoutschedule: Array,
//     gyms: Array,
//     activities: Array,
//     fitconnections: [fitconnectionsSchema]
//
// })

const accountSchema = new Schema({
    username: {
        type: String,
        lowercase: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: String,
    datejoined: Date,
    profile: {
        username: {
            type: String,
            lowercase: true
        },
        email: {
            type: String
        },
        datejoined: Date,
        firstname: String,
        lastname: String,
        profileimage: String,
        location: Array,
        age: {
            type: Number,
            min: 18,
            max: 100
        },
        gender: String,
        workoutschedule: Array,
        gyms: Array,
        activities: Array,
        goals: Array,
        fitconnections: [fitconnectionsSchema]

    }
});

accountSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Account', accountSchema)

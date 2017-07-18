const express = require('express')
const dashboardRouter = express.Router()
const Account = require('../models/Account');
const isAuthd = require('../utils/isAuthd');
const datajson = require('../data/data.json')
const isEmpty = require('../utils/isEmpty')

dashboardRouter.use(isAuthd)

dashboardRouter.get('/', ( req, res ) => {

    res.redirect('/')
    // let account = req.user;
    //
    // if (account) {
    //     res.redirect(`/dashboard/${account.username}`)
    // } else {
    //     res.redirect('/')
    // }
})

dashboardRouter.get('/:username', function (req, res) {
    Account.findOne({'username': req.params.username}, function (err, account) {
        //console.log(account)
        //let account = account.profile
        res.render('dashboard', { account })
    })
})

dashboardRouter.get('/profile/:username', function (req, res) {
    Account.findOne({'username': req.params.username}, function (err, account) {
        //console.log(account.profile)
        //console.log(account)
        res.render('profile/view', { account: account, datajson })
    })
})

dashboardRouter.get('/profile/edit/:username', function( req, res ){
    Account.findOne({'username': req.params.username}, function (err, account) {
        res.render('profile/edit', { account, datajson })
    })
})
dashboardRouter.post('/profile/save/:username', function (req, res) {
    console.log(req.body)


    Account.findOne({'username': req.params.username}, function (err, account) {

        account.profile = {
            username: req.body.username,
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            gender: req.body.gender,
            bio: req.body.bio,
            location: {
                zip: req.body.zip,
                city: req.body.city,
                state: req.body.state
            },
            gyms: req.body.gyms,
            workoutschedule: req.body.workoutschedule,
            activities: req.body.activities,
            goals: req.body.goals
        }

    account.save();
    console.log('saved!')
    console.log(account)
    //console.log(account.profile)
    //res.render('profile/view', {account})
    res.redirect(`/dashboard/profile/${account.username}`)
    })
})

dashboardRouter.get('/search/:username', function (req, res) {
    let account = req.user;
    res.render('search/search', {account, datajson})
})

dashboardRouter.post('/search', function (req, res) {
    let account = req.user;
    console.log(req.body)

    let searchQuery = {
        '_id': { '$ne': req.user.id }
    }
    // let searchQuery = []

    if (req.body.age && req.body.age !== "") {
        searchQuery['profile.age'] = req.body.age
    }

    if (req.body.gender && req.body.gender !== "") {
        searchQuery['profile.gender'] = req.body.gender
    }

    if (req.body.workoutschedule && req.body.workoutschedule !== "") {
        searchQuery['profile.workoutschedule'] = req.body.workoutschedule
    }

    if (req.body.activities && req.body.activities !== "") {
        searchQuery['profile.activities'] = req.body.activities
    }

    if (req.body.goals && req.body.goals !== "") {
        searchQuery['profile.goals'] = req.body.goals
    }

    if (req.body.location && req.body.location !== "") {
        searchQuery['profile.location'] = req.body.location
    }
    console.log(searchQuery)

    Account.find(searchQuery, function (err, results) {

        if (!results[0] || isEmpty(searchQuery)) {
            res.render('search/results', {account})
        } else {
            res.render('search/results', {account, results})
        }
        console.log(results)

    // This worked
    // Account.find({'profile.gender': 'Female'}, function (err, results) {
    //     //res.send('completed')
    //     res.render('search/results', {results})
    //     console.log(results)
    })
    // console.log(req)
    // console.log(req.query)

})

dashboardRouter.post('/connections/add/:username', function (req, res) {
    console.log(req.body)
    Account.findOne({'username': req.params.username}, function(err, account) {
        account.profile.fitconnections.push({
            username: req.body.username,
            email: req.body.email,
            profileimage: req.body.profileimage,
            location: req.body.location,
            age: req.body.age,
            gender: req.body.gender,
            workoutschedule: req.body.workoutschedule,
            gyms: req.body.gyms,
            activities: req.body.activities,
            goals: req.body.goals
        })
        account.save();
        res.redirect(`/dashboard/${account.username}`)
        //res.render('dash/single', {artist})
    })

})
dashboardRouter.get('/connections/view/:username', function (req, res) {
    Account.findOne({'username': req.params.username}, function (err, fitconnection) {
        
    })
})
dashboardRouter.get('/connections/delete')

module.exports = dashboardRouter

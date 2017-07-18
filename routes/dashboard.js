const express = require('express')
const dashboardRouter = express.Router()
const Account = require('../models/Account');
const isAuthd = require('../utils/isAuthd');
const datajson = require('../data/data.json')

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
            location: req.body.location,
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

})
dashboardRouter.get('/connections')
dashboardRouter.get('/connections/view')
dashboardRouter.get('/connections/add')
dashboardRouter.get('/connections/delete')

module.exports = dashboardRouter

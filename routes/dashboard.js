const express = require('express')
const dashboardRouter = express.Router()
const Account = require('../models/Accounts');
const isAuthd = require('../utils/isAuthd');

dashboardRouter.use(isAuthd)

dashboardRouter.get('/', ( req, res ) => {
    res.send('hello')
})

dashboardRouter.get('/:username', function (req, res) {
    Account.findOne({'username': req.params.username}, function (err, account) {
        res.render('dashboard', { account })
    })
})

dashboardRouter.get('/profile/:username', function (req, res) {
    Account.findOne({'username': req.params.username}, function (err, account) {
        res.render('profile/view', { account })
    })
})

dashboardRouter.get('/profile/edit/:username', function( req, res ){
    Account.findOne({'username': req.params.username}, function (err, account) {
        res.render('profile/edit', { account })
    })
})
dashboardRouter.get('/profile/save')

dashboardRouter.get('/connections')
dashboardRouter.get('/connections/view')
dashboardRouter.get('/connections/add')
dashboardRouter.get('/connections/delete')

module.exports = dashboardRouter

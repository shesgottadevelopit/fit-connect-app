const express = require('express');
const indexRouter = express.Router()
const Account = require('../models/Accounts');
const passport = require('passport');
const isAuthd = require('../utils/isAuthd');

indexRouter.get('/', function (req, res) {
    let account = req.user
    // console.log(account)
    res.render('index', {account: account})
})

indexRouter.get('/about', function(req, res) {
    let account = req.user
    res.render('about', {account: account})
})

indexRouter.get('/contact', function(req, res) {
    let account = req.user
    res.render('contact', {account: account})
})

indexRouter.get('/signup', function (req, res) {
    res.render('signup')
})

indexRouter.post('/signup', function (req, res) {
    Account.register(new Account({
        username: req.body.username,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    }), req.body.password, function ( err, account) {
        if ( err ) {
            return res.render('signup', { account: account })
        }
        //console.log(req.body) - includes the actual passport
        passport.authenticate('local')(req, res, function () {
            //res.render(`dashboard/${username}`, { account: account })
            res.redirect(`/dashboard/${account.username}`)
        })
    })
})


indexRouter.get('/login', function ( req, res) {
    res.render('login')
})

indexRouter.post('/login', passport.authenticate('local'), function (req, res) {
    let account = req.user
    // console.log(req.body)
    // console.log(account)
    // res.redirect(`/dashboard/${account.username}`)
    res.redirect(`/dashboard/${account.username}`)
})

indexRouter.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
})


module.exports = indexRouter;

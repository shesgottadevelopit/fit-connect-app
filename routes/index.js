const express = require('express');
const indexRouter = express.Router()
const Account = require('../models/Account');
const passport = require('passport');
const isAuthd = require('../utils/isAuthd');

indexRouter.get('/', function (req, res) {
    let account = req.user
    // console.log(account)
    res.render('index', {account: account})
})

// just a test
indexRouter.get('/test', function (req, res) {
    Account.find({}, function (err, accounts) {
        res.render('test', {accounts})
    })
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
        profile: {
            username: req.body.username,
            email: req.body.email
        }
    }), req.body.password, function ( err, account) {
        if ( err ) {
            return res.render('signup', { account: account })
        }
        //console.log(req.body) - includes the actual passport
        passport.authenticate('local')(req, res, function () {
            console.log('saved!')
            //res.render(`dashboard/${username}`, { account: account })
            //res.redirect('/')
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
    //res.render('dashboard', {account})
    res.redirect(`/dashboard/${account.username}`)
})

indexRouter.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
})

indexRouter.get('/delete/:username', function (req, res) {
    Account.findOne({'username': req.params.username}, function (err, account) {
        account.remove()
        res.redirect('/test')
    })
})


module.exports = indexRouter;

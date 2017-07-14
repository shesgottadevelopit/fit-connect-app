const express = require('express');
const indexRouter = express.Router()
const Account = require('../models/Accounts');
const passport = require('passport');

indexRouter.get('/', function (req, res) {
    res.render('index')
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
        console.log(req.body)
        passport.authenticate('local')(req, res, function () {
            //res.render(`dashboard/${username}`, { account: account })
            res.redirect(`/dashboard/${account.username}`)
        })
    })
})

function isAuthd (req, res, next) {
    if (req.isAuthenticated())
    return next()
    res.redirect('/')
}


indexRouter.get('/login', function ( req, res) {
    res.render('login')
})

indexRouter.post('/login', passport.authenticate('local'), function (req, res) {
    console.log(req.body)
    // res.redirect(`/dashboard/${account.username}`)
    res.redirect(`/dashboard/${req.body.username}`)
})

indexRouter.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
})

indexRouter.get('/dashboard/:username', isAuthd, function (req, res) {
    Account.findOne({'username': req.params.username}, function (err, account) {
        res.render('dashboard', { account })
    })
})

indexRouter.get('/profile/:username', isAuthd, function (req, res) {
    Account.findOne({'username': req.params.username}, function (err, account) {
        res.render('profile', { account })
    })
})

module.exports = indexRouter;

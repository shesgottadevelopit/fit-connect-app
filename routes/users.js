const express = require('express')
const usersRouter = express.Router()
const Account = require('../models/Account');
const isAuthd = require('../utils/isAuthd');
const datajson = require('../data/data.json')
const isEmpty = require('../utils/isEmpty')

usersRouter.use(isAuthd)

usersRouter.get('/profile/:id', function (req, res) {
    let account = req.user
    Account.findOne({'_id': req.params.id}, function (err, userprofile) {

        res.render('search/userprofiles', { userprofile, account })
    })
})

module.exports = usersRouter

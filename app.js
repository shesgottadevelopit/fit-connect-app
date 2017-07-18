const express = require('express');
const nunjucks = require('nunjucks')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// create express app
const app = express()

// connect database
mongoose.connect('mongodb://sgdi:happyfeet@rihanna0-shard-00-00-pl4hb.mongodb.net:27017,rihanna0-shard-00-01-pl4hb.mongodb.net:27017,rihanna0-shard-00-02-pl4hb.mongodb.net:27017/fitconnectapp?ssl=true&replicaSet=Rihanna0-shard-0&authSource=admin')

// configure templating engine; nunjucks
nunjucks.configure([
    'views',
    'views/layouts',
    'views/layouts/partials'], {
    autoescape: true,
    lstripBlocks: true,
    express: app,
    watch: false,
    noCache: true,
    web: {}
});
app.set('view engine', 'nunjucks')


// data formatting
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())


// static files located in
app.use(express.static('public'))


// authentication config
app.use(cookieParser())
app.use(require('express-session')({ // why is this happening here
    secret: 'what is lemonade', // only required property
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize()) // explain
app.use(passport.session())

let Account = require('./models/Account')
passport.use(new LocalStrategy(Account.authenticate()))
passport.serializeUser(Account.serializeUser())
passport.deserializeUser(Account.deserializeUser())

// app routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter)

const dashboardRouter = require('./routes/dashboard')
app.use('/dashboard', dashboardRouter)

// any request of a page that does not have a route will be redirected home
// app.get('*', function( req, res ){
//     res.redirect('/')
// })

app.listen(7000, function () {
    console.log('listening on port 7000')
})

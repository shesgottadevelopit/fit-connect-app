// checking if the user is logged in and authenticated before giving them access to certain pages in our application

function isAuthd (req, res, next) {
    if (req.isAuthenticated())
    return next()
    //res.redirect('/')
}

module.exports = isAuthd

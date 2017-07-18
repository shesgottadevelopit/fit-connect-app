Things to do:
- [x] map out paths for application
- [x] write out necessary views
    - [x] first iteration
    - [ ] second iteration
- [x] draft first models and schemas for user accounts, profiles, whatelse???
- [x] setup server
- [x] setup database
- [x] setup templating engine / nunjucks
- [x] connect stylesheet & static files
- [x] review authentication, read through documentation and figure that shit out
    - [x] email/username signup
    - [ ] OAuth using FB or twitter or whatever **progressive enhancement**
    - [ ] add validation for emails and usernames through HTML5 and js on the server side
- [x] configure app for authentication
    - [x] run `npm install -S passport passport-local passport-local-mongoose`
    - [x] require `passport passport-local passport-local-mongoose` within `app.js`
    - [x] create a model for user accounts (example: http://passportjs.org/docs/profile)
    - [x] configure passport within `app.js`
        - [x] write helper function to check if session still exists
        - [x] implement ways to protect certain conteent based on credentials (`isAuthd` functionality)
- [x] configure application queries
- [x] add basic styling and/or graphics
- [ ] deploy to heroku
    - [x] setup Procfile
    - [ ] run `heroku create`
    - [ ] run `git remote -v` to see if the remote was properly added
    - [ ] run `git push heroku master` to deploy

Other deployment notes:
```javascript
heroku logs --tail

let port = process.env.PORT || 3000

app.listen( port, () => {

  console.log( 'listening on 3000' )

})


app.listen(process.env.PORT)
```

---
**Views & Routes**

- [ ] / **root**
    - [x] /about
    - [x] /contact
    - [x] /signup
    - [x] /login
- [ ] /dashboard
    - [x] /{username}
    - [ ] /profile
            - [x] /profile/edit
            - [x] /profile/save
        - [x] /connections
            - [ ] /view/:username
            - [x] /add/:username
            - [ ] /delete/:username
- [x] /users
    - [x] /profile
        - [x] {id}
- [x] /search
    - [x] /search - form
    - [x] /results
    - [x] /add - for adding connections
    - [x] /save - for saving connections
    - [ ] /delete - for deleting connections



**Query options**
- age range
- location (distance range)
- workout preferences
- gyms
- activities
- fitness goals


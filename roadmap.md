Things to do:
- [x] map out paths for application
- [x] write out necessary views
    - [x] first iteration
    - [ ] second iteration
- [ ] draft first models and schemas for user accounts, profiles, whatelse???
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
- [ ] ...
- [ ] ...
- [ ] ...
- [ ] configure application queries
- [ ] ...
- [ ] create graphics
- [ ] add styling
- [ ] deploy to heroku
    - [ ] setup Procfile
- [ ]

---
**Views & Routes**
Can also replace `{id}` with `{username}`

- [ ] / **root**
    - [ ] /about
    - [ ] /contact
    - [ ] /signup
    - [ ] /login
- [ ] /dashboard
    - [ ] /{username}
        - [ ] /profile
            - [ ] /profile/edit
            - [ ] /profile/save
        - [ ] /connection
            - [ ] /view
            - [ ] /add
            - [ ] /delete
- [ ] /users
    - [ ] /profile
        - [ ] {id}
- [ ] /search
    - [ ] /add - for adding connetions
    - [ ] /save - for saving connections
    - [ ] /delete - for deleting connections


- /profile
    - /:id
    - /edit/:id
    - /edit

**Test users:**
marybeth (booboo)
shesgottadevelopit+test1@gmail.com

janet (testing)
shesgottadevelopit+test1@gmail.com

aziza (jones)
shesgottadevelopit+test1@gmail.com

## Fit Connect App (working title)

### Project Description
The original concept was limited to women, but **Fit Connect** is an application that helps **all** individuals connect with others based on their similar fitness goals. This will help anyone who wants an accountability partner or someone who gets more motivated (and accountable) when working with others than just alone.


### Project UI
Users will be able to create a personal account, set up their profile to include basic info (age, sex, location) and fitness details: their current fitness level, their preferred gym or workout locations, classes or fitness programs they enjoy or would like to participate in, along with days/times for workout scheduling.

Users will then be able to browse the database and connect with others with similar profiles. They can save profiles for later and also possibly send messages/emails to potential workout buddies.

Users will also be able to create workout events and have other members join them.

**Views**
Can also replace `{id}` with `{username}`

[PLACEHOLDER FOR WHEN I FINALIZE MY ISH IN `roadmap.md`]



### Features
- [ ] express
- [ ] mongodb
- [ ] mongoose
- [ ] undecided on authentication method
    - [ ] Possibly use FB/Twitter/Google or whatever for login/account creation
- [ ] nunjucks or handlebars


### Technical Requirements

This application utilizes CRUD for creating users and updating their pages

- [ ] New User Account Creation Page - authentication
- [ ] Returning User Login Page - authentication
- [ ] User Account Profile/dashboard
- [ ] CRUD abilities for querying other users with similar profiles
    - [ ] add, update, and delete fitness connections linked to each user's profile


Potential APIs for integration (and other features):
- [ ] [FitBit](https://dev.fitbit.com/docs/devices/) // for activity importing
- [ ] [Socket for Chat](https://socket.io)
- [ ] [UnderArmour](https://developer.underarmour.com/docs/)
- [ ] [MyFitnessPal](http://www.myfitnesspal.com/api)

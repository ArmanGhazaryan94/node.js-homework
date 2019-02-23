var passport = require('passport')
    , TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
        consumerKey: 'SOME_KEY',
        consumerSecret: 'SOME_SECRET',
        callbackURL: "http://www.example.com/auth/twitter/callback"
    }, (token, tokenSecret, profile, done) => done(null, true)
));
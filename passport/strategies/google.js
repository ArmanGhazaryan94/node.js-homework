import passport from 'passport';
import Strategy from 'passport-google-oauth';

const GoogleStrategy = Strategy.OAuthStrategy;

passport.use(new GoogleStrategy({
        consumerKey: "SOME_KEY",
        consumerSecret: "SOME_SECRET",
        callbackURL: "http://www.example.com/auth/google/callback"
    },(token, tokenSecret, profile, done) => done(err, true)
));
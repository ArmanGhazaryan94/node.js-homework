import passport from 'passport';
import FacebookStrategy from 'passport-facebook';

passport.use(new FacebookStrategy({
        clientID: 2126884430935887,
        clientSecret: "df5e9bd6697adfd740009d15d3616959",
        callbackURL: "http://localhost:8080/auth/facebook/callback"
    },(accessToken, refreshToken, profile, done) => done(null, true)
    ));
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/user');

// Serialize and deserialize user for session management
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
});

// Local Strategy for email/password authentication
passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect password.' });
        }
    } catch (err) {
        return done(err);
    }
}));

// Google Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/user/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    let user = await User.findOne({ googleId: profile.id });
    if (user) {
        return done(null, user);
    }
    user = await new User({
        googleId: profile.id,
        username: profile.displayName,
        email: profile.emails[0].value
    }).save();
    done(null, user);
}));

// Facebook Strategy
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: "/user/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email']
}, async (accessToken, refreshToken, profile, done) => {
    let user = await User.findOne({ facebookId: profile.id });
    if (user) {
        return done(null, user);
    }
    user = await new User({
        facebookId: profile.id,
        username: profile.displayName,
        email: profile.emails[0].value
    }).save();
    done(null, user);
}));

// GitHub Strategy
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/user/auth/github/callback"
}, async (accessToken, refreshToken, profile, done) => {
    let user = await User.findOne({ githubId: profile.id });
    if (user) {
        return done(null, user);
    }
    user = await new User({
        githubId: profile.id,
        username: profile.displayName, // Note: GitHub profiles might not provide a display name
        email: profile.emails[0].value
    }).save();
    done(null, user);
}));

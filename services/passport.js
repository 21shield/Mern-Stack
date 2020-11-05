const passport = require("passport");
const keys = require("../config/keys");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
// getting access to the userModel from mongoose who created a user schema
// this becomes a user "class" to create new model instances to save in the db
const User = mongoose.model("users");
// saves the user info as a cookie to ensure they stay logged in
passport.serializeUser((user, done) => {
  // user here is what you fond from the db
  // id is from the db id
  // null is an error obj
  done(null, user.id);
  // stuff this in the cookie
});
//
passport.deserializeUser((id, done) => {
  // search over the collection find the user and return that user
  // when ever you access the mongo db you get back a promise
  User.findById(id).then((user) => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },

    (accessToken, refreshToken, profile, done) => {
      // send back the token your keys from google to google to let you get the info
      // save the new user into the db on mongo
      // findeOne returns a promise
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // if theres an error obj first arg , user record is the second arg
          done(null, existingUser);
        } else {
          // the older user from info given
          new User({ googleId: profile.id })
            .save()
            // the updated user to save and update
            .then((user) => done(null, user));
        }
      });
    }
  )
);

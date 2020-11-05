const passport = require("passport");
const key = require("../config/key");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: key.googleClientID,
      clientSecret: key.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // send back the token your key from google to google to let you get the info

      console.log(accessToken, "refToke", refreshToken, "profile", profile);
    }
  )
);

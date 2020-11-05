require("./models/User");
require("./services/passport");
const cookieSession = require("cookoe-session");
const passport = require("passport");
const mongoose = require("mongoose");
const express = require("express");
const keys = require("./config/keys");
const app = express();
const authRoutes = require("./routes/authRoutes");

// in javascript this calls the route funciton and invokes it with app as an argumen
// or require('.routes/authRoutes')(app)
authRoutes(app);
mongoose.connect(keys.mongoURI);
// creates a new instance of googleStrategy
// this can now be used for the user

// route handler
// app.get('/', (req, res) => {
// listen to a special http request like a "get", "post", "put", "delete", "patch"
// these are convention
// '/' route handler the ending / of local host ie: "/login", "/", "/signup"
// res.send({hi: 'Jackson I see you'})
// the above  res.send sends back the info as json to the front

// });
// run server for backend node >filename<
// the port chosed to be the traffic input
//  ^^ app.listen(5000)

app.use(
  cookieSession({
    // how long this cookie can last in a browser
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // signs or encrypts info
    keys: [],
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

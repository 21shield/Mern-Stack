require("./services/passport");
require("./models/User");

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

const PORT = process.env.PORT || 5000;
app.listen(PORT);

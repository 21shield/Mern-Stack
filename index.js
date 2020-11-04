const express = require('express')
// console.log(express)
const app = express();
// route handler
app.get('/', (req, res) => {
    // listen to a special http request like a "get", "post", "put", "delete", "patch"
    // these are convention
    // '/' route handler the ending / of local host ie: "/login", "/", "/signup"
    res.send({hi: 'there'})
    // the above  res.send sends back the info as json to the front

});
// run server for backend node >filename<
// the port chosed to be the traffic input
//  ^^ app.listen(5000)

const PORT = process.env.PORT || 5000
app.listen(PORT)


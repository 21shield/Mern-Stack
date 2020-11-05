// remember this file has to be required inorder to run
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  // add as many as you want or remove
  googleId: String,
});
// create a new collection called "users" using the format for userSchema
mongoose.model("users", userSchema);

const mongoose = require("mongoose");
// const cookieParser = require('cookie-parser')

// npm i mongoose-role

const Schema = mongoose.Schema;
const validator = require("validator");

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "please provide username"],
    minlength: 4,
    maxlength: 15,
    trim: "true", //tpye "  hello" "hello"
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "please provide valid email",
    },
  },
  password: {
    type: String,
    required: [true, "please provide password"],
    minlength: 8,
  },
//   roles: ['public', 'user', 'manager', 'admin'],
});

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel;

const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: 'Username is Required'
  },

  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    minlength: 6
  },

  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+@.+\..+/]
  },
  thoughts: {},
  friends: {}
});

const User = model('User', UserSchema);

module.exports = User;
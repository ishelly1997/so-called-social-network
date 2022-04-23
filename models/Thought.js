const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    trim: true,
    unique: true,
    required: 'Username is Required'
  },

  createdAt: {
    type: String,
    trim: true,
    required: 'Password is Required',
    minlength: 6
  },

  username: {
    type: String,
    unique: true,
    required: true,
    match: [/.+@.+\..+/]
  },
  reactions: {}
});

const User = model('User', ThoughtSchema);

module.exports = Thought;
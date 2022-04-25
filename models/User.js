const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: 'Username is Required'
  },

  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+@.+\..+/]
  },
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'Thoughts'
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'Users'
  }]
},
{
  toJSON: {
    virtuals:true,
    getters: true
  },
  id: false
}
);
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
})
const User = model('User', UserSchema);

module.exports = User;
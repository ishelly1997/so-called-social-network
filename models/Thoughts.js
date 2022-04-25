const { Schema, model, Types } = require('mongoose');
const moment = require('moment');
const { DataTypes } = require('sequelize/types');

const reactionsSchema = new Schema (
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId
  },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
  },
  
    username: {
      type: String,
      required: true
  },
    createdAt: {
      type: Date,
      default: Date.now
    }
})

const thoughtsSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength : 1,
    maxlength: 280
  },

  createdAt: {
    type: Date,
    default: Date.now,
    getter: true
  },

  username: {
    type: String,
    required: true,
  },
  reactions: [reactionsSchema] 
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
} 
);
thoughtsSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});


const Thoughts = model('Thoughts', thoughtsSchema);

module.exports = Thoughts;
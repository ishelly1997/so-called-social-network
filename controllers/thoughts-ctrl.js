
const {Thoughts, User} = require('../models');


const thoughtsController = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thoughts.find({})
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },    //get a single thought by id
    getThoughtByID ({ params }, res) {
        Thoughts.findOne({_id: params.id})
        .then(dbThoughtsData => {
            if (!dbThoughtsData) {
                res.status(404).json({ message :'NA'});
                return;
            }
            res.json(dbThoughtsData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    createThought ({ body }, res) {
        Thoughts.create(body)
        .then(dbThoughtsData => {
            User.findOneAndUpdate(
                { _id: body.userId },
                { $push: { thoughts: dbThoughtsData._id } },
                { new: true }
            )
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'N/A' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
        })
        .catch(err => res.status(400).json(err));
    },

    // put/ update thought by id
    updateThought({ params, body }, res) {
        Thoughts.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
          .then(dbThoughtsData => {
            if (!dbThoughtsData) {
              res.status(404).json({ message: 'N/A' });
              return;
            }
            res.json(dbThoughtsData);
          })
          .catch(err => res.json(err));
      },
    //delete thought by id
    deleteThought({ params }, res) {
        Thoughts.findOneAndDelete({ _id: params.id })
          .then(dbThoughtsData => {
            if (!dbThoughtsData) {
              res.status(404).json({ message: 'N/A' });
              return;
            }
            return User.findOneAndUpdate(
              { _id: parmas.userId },
              { $pull: { thoughts: params.Id }},
              { new: true }
            )
          })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'N/A' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
      },

    // post reaction
    postReaction({ params, body }, res) {
        Thoughts.findOneAndUpdate(
            { _id: params.thoughtId },
            { $addToSet: { reactions: body }},
            { new: true, runValidators: true }
        )
        .then(dbThoughtsData => {
            if (!dbThoughtsData) {
                res.status(404).json({ message: 'N/A' });
                return;
            }
            res.json(dbThoughtsData);
        })
        .catch(err => res.status(500).json(err));
    },
    // delete reaction
    deleteReaction({ params, body }, res) {
        Thoughts.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: body.reactionId }}},
            { new: true, runValidators: true }
        )
        .then(dbThoughtsData => {
            if (!dbThoughtsData) {
                res.status(404).json({ message: 'N/A' });
                return;
            }
            res.json({message: 'reaction deleted'});
        })
        .catch(err => res.status(500).json(err));
    },
}
module.exports = thoughtsController;
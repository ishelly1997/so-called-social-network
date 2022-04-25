
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
        User.findOne({_id: params.id})
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

    // put/ update thought by id
    updateThought() {},
    //delete thought by id
    deleteThought() {},

    // post reaction
    postReaction() {},
    // delete reaction
    deleteReaction() {}
}
module.exports = thoughtsController;
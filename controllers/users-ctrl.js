
const res = require('express/lib/response');
const {Users} = require('../models');
const { db } = require('../models/User');


const usersController = {
    //get all users
    getAllUsers(req, res) {
        Users.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    //get single user by ID
    getUserByID ({ params }, res) {
        User.findOne({_id: params.id})
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message :'NA'});
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
    // post new user
    // put / update user by ID
    //delete user by id
    // post friend to user friend list
    //delete friend from friend list
}

module.exports = usersController;
const router = require('express').Router();

const {
    getAllUsers,
    getUserByID,

} = require('../../controllers/users-ctrl')
router
    .route('/')
    .get(getAllUsers)
    .post();

router
    .route('/:id')
    .get(getUserByID)
    .put()
    .delete()

module.exports = router; 
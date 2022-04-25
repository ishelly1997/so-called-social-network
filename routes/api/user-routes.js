const router = require('express').Router();

const {
    getAllUsers,
    getUserByID,
    createNewUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend

} = require('../../controllers/users-ctrl');
router
    .route('/')
    .get(getAllUsers)
    .post(createNewUser)

router.route('/:id')
    .get(getUserByID)
    .put(updateUser)
    .delete(deleteUser)

router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)

module.exports = router; 
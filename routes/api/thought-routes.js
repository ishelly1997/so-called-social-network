const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtByID,
    createThought,
    updateThought,
    deleteThought,
    postReaction,
    deleteReaction

} = require('../../controllers/thoughts-ctrl');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

router.route('/:id')
    .get(getThoughtByID)
    .put(updateThought)
    .delete(deleteThought)

router.route('/:thoughtId/reactions/')
    .post(postReaction)
    .delete(deleteReaction)
    
module.exports = router; 
const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtByID,

} = require('../../controllers/thoughts-ctrl');

router
    .route('/')
    .get(getAllThoughts)
    .post();

router
    .route('/:id')
    .get(getThoughtByID)
    .put()
    .delete()
    
module.exports = router; 
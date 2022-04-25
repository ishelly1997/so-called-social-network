const router = require('express').Router();

const usersRoutes = require('./user-routes');
const thoughtsRoutes = require('./thought-routes');

// Add users-routes 
router.use('/users', usersRoutes);

// Add thoughts-routes 
router.use('/thoughts', thoughtsRoutes);

module.exports = router;
const router = require('express').Router();
const userRoutes = require('./userRoutes');

// append /users to all routes inside the userRoutes folder
router.use('/users', userRoutes);

module.exports = router;
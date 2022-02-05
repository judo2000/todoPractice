const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { getAllUsers } = require('../controllers/userController');

router.get('/', getAllUsers);

// prepend /api to all routes inside the apiRoutes folder
router.use('/api', apiRoutes);

module.exports = router;
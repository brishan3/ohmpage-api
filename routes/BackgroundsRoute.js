const router = require('express').Router();
const BackgroundsController = require('../controllers/BackgroundsController');

// Return all background img objects
router.route('/').get(BackgroundsController.index);

module.exports = router;
const router = require('express').Router();
const LinksController = require('../controllers/LinksController');


// Return all hyperlink objects
router.route('/').get(LinksController.index);

module.exports = router;
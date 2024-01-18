// Imports
var express = require('express');
var router = express.Router();

/**
 * Home page
 * 
 */
router.get('/', function(req, res, next) {
	res.render('pages/index', { 
		title: 'gate a best mentorship'
	});
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/styleguide');
});
router.get('/styleguide', function(req, res, next) {
  res.render('styleguide');
});
router.get('/welcome', function(req, res, next) {
  res.render('welcome');
});

module.exports = router;

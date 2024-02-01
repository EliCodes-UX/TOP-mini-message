var express = require('express');
var router = express.Router();

router.get('/new', function (req, res, next) {
  res.render('new', { title: 'Express' });
});
module.exports = router;

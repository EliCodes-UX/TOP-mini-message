var express = require('express');
var router = express.Router();

router.post('/new', (req, res) => {
  res.send('Form submitted!');
});

module.exports = router;

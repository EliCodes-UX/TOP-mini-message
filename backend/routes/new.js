const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('new', {
    title: 'Mini Messageboard',
    heading: 'Add New Message:',
  });
});

module.exports = router;

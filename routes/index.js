//module imports
const express = require('express');
const router = express.Router();

//routes
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//expose
module.exports = router;

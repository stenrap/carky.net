var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('content');
});

router.get('/register', function(req, res, next) {
    res.render('content');
});

module.exports = router;

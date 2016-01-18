var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    
    // TODO and WYLO .... You kinda left off here. You need to:
    // 
    //                          1. Set up webpack and configure a single entry point (carky)
    //                          2. Add a require.ensure() to carky.js and see if your webpack build is working.
    //                          3. Add a <script> tag for common.js and the carky.js router to index.jade
    //                      4. Create a model, view, and controller for login
    //                      5. Use flexbox for all the style!
    
    res.render('index', {title: 'Carky'});
});

module.exports = router;

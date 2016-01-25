var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    
    // TODO and WYLO 3 .... You kinda left off here. You need to:
    // 
    //                          1. Set up webpack and configure a single entry point (carky)
    //                          2. Add a require.ensure() to carky.js and see if your webpack build is working.
    //                          3. Add a <script> tag for common.js and the carky.js router to index.jade
    //                      4. Create a model, view, and controller for login
    //                      5. Use flexbox for all the style (and CSS modules via webpack)!
    
    /*
        Pseudo Code:
        
            if (the user is logged in) {
                redirect to /games
            } else {
                render the beautiful sign-in/register page you created when you were going to do carky in Java/Spring
            }
     */
    
    res.render('index');
});

module.exports = router;

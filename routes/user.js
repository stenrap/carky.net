var express = require('express');
var router = express.Router();

router.post('/register', function(req, res, next) {

    // TODO and WYLO 1 .... Use the register-model to validate the registration, then use the db service to stick the user
    //                      in the database, then use the email service (after you create it) to send a 'welcome' email.

    res.send({success: true});
});

module.exports = router;

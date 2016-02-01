var express = require('express'),
    router = express.Router(),
    model = require('../public/js/models/register-model');

router.post('/register', function(req, res, next) {
    model.setEmail(req.body.email);
    model.setName(req.body.name);
    model.setPassword1(req.body.password1);
    model.setPassword2(req.body.password2);
    var result = model.validate();
    if (result.error) {
        return res.send({error: result.error});
    }
    
    // TODO and WYLO 1 .... See TODO and WYLO 1 for the /register flow in the project.text file.

    res.send({success: true});
});

module.exports = router;

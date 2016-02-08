var express      = require('express'),
    router       = express.Router(),
    model        = require('../public/js/models/register-model'),
    uuid         = require('node-uuid'),
    emailService = require('../services/email-service'),
    dbService    = null;

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
    dbService.getUserByEmail(model.getEmail(), function(err, result) {
        if (err) {
            return res.send({error: err});
        }
        var code = uuid.v4();
        if (result.id) {
            if (result.code) {
                // TODO and WYLO .... Update the user code via your new stored function.
                
                // TODO .... Uncomment this when you've decided how carky.net email will work.
                //emailService.sendCode(model.getEmail(), code);
            } else {
                
            }
        } else {
            
            // TODO .... Uncomment this when you've decided how carky.net email will work.
            //emailService.sendCode(model.getEmail(), code);
        }
    });
    

    res.send({success: true});
});

module.exports = function(databaseService) {
    dbService = databaseService;
    return router;
};

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
    
    dbService.getUserByEmail(model.getEmail(), function(err, result) {
        if (err) {
            return res.send({error: err});
        }
        var code = uuid.v4();
        if (result.id) {
            if (result.code) {
                dbService.updateUserCode(code, model.getEmail(), function(updateErr) {
                    if (updateErr) {
                        return res.send({error: updateErr});
                    }
                    // TODO .... Uncomment this when you've decided how carky.net email will work.
                    //emailService.sendCode(model.getEmail(), code);
                    return res.send({updatedCode: true});
                });
            } else {
                return res.send({alreadyVerified: true});
            }
        } else {
            dbService.registerUser(model.getEmail(), model.getName(), model.getPassword1(), code, function(registerErr) {
                if (registerErr) {
                    return res.send({error: registerErr});
                }
                // TODO .... Uncomment this when you've decided how carky.net email will work.
                //emailService.sendCode(model.getEmail(), code);
                return res.send({created: true});
            });
        }
    });
    

    res.send({success: true});
});

module.exports = function(databaseService) {
    dbService = databaseService;
    return router;
};

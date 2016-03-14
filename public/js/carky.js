var Backbone           = require('backbone'),
    globalStyles       = require('global'),
    loginController    = null,
    registerController = null;

var CarkyRouter = Backbone.Router.extend({
    
    routes: {
        '': 'login',
        'register': 'register'
    },
    
    login: function() {
        var router = this;
        if (loginController === null) {
            require.ensure(['login-controller'], function(require) {
                loginController = require('login-controller');
                loginController.doLogin(router);
            });
        } else {
            loginController.doLogin(router);
        }
    },
    
    register: function() {
        var router = this;
        if (registerController === null) {
            require.ensure(['register-controller'], function(require) {
                registerController = require('register-controller');
                registerController.doRegister(router);
            });
        } else {
            registerController.doRegister(router);
        }
    },

    routeToRegister: function() {
        this.navigate('register', {trigger: true});
    }
    
});

var router = new CarkyRouter();

Backbone.history.start({pushState: true});

module.exports = router;

var Backbone = require('backbone');

var CarkyRouter = Backbone.Router.extend({
    
    routes: {
        '': 'login',
        'register': 'register'
    },
    
    login: function() {
        
    },
    
    register: function() {
        // TODO and WYLO 4 .... Render this bad boy (should have a lot in common with the login view)
    }
    
});

var router = new CarkyRouter();

Backbone.history.start({pushState: true});

module.exports = router;

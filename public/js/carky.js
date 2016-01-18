var Backbone = require('backbone');

var CarkyRouter = Backbone.Router.extend({
    
    routes: {
        '': 'login'
    },
    
    login: function() {
        require.ensure(['test'],  function(require) {
            var test = require('test');
            test.doTest();
        })
    }
    
});

var router = new CarkyRouter();

Backbone.history.start({pushState: true});

module.exports = router;

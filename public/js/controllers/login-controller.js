var ReactDOM = require('react-dom'),
    model    = require('login-model'),
    view     = require('login-view'),
    router   = null;

function LoginController() {}

LoginController.prototype = {

    doLogin: function(carkyRouter) {
        router = carkyRouter;
        model.clear();
        controller.renderView();
    },

    renderView: function() {
        ReactDOM.render(
            React.createElement(
                view,
                {
                    name: 'Rob',
                    registerClicked: controller.registerClicked
                }
            ),
            document.getElementById('content')
        );
    },
    
    registerClicked: function() {
        router.routeToRegister();
    }

};

var controller = new LoginController();
module.exports = controller;

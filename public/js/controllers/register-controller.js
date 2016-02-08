var ReactDOM = require('react-dom'),
    model    = require('register-model'),
    view     = require('register-view'),
    router   = null;

function RegisterController() {}

RegisterController.prototype = {
    
    doRegister: function(carkyRouter) {
        router = carkyRouter;
        model.clear();
        controller.renderView();
    },
    
    renderView: function() {
        ReactDOM.render(
            React.createElement(
                view,
                {
                    name: 'Rob'
                }
            ),
            document.getElementById('content')
        );
    }
    
};

var controller = new RegisterController();
module.exports = controller;

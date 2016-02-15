var ReactDOM = require('react-dom'),
    model    = require('register-model'),
    view     = require('register-view'),
    router   = null;

function RegisterController() {}

RegisterController.prototype = {
    
    doRegister: function(carkyRouter) {
        router = carkyRouter;
        model.clear();
        controller.setBackground();
        controller.renderView();
    },
    
    setBackground: function() {
        document.documentElement.style.background = 'url(assets/log-reg-back.jpg) no-repeat center center fixed';
        document.documentElement.style.backgroundSize = 'cover';
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

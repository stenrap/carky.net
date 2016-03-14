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
                    emailChanged:     controller.emailChanged,
                    nameChanged:      controller.nameChanged,
                    password1Changed: controller.password1Changed,
                    password2Changed: controller.password2Changed,
                    submitClicked:    controller.submitClicked
                }
            ),
            document.getElementById('content')
        );
    },
    
    emailChanged: function(email) {
        model.setEmail(email);
    },
    
    nameChanged: function(name) {
        model.setName(name);
    },
    
    password1Changed: function(password1) {
        model.setPassword1(password1);
    },

    password2Changed: function(password2) {
        model.setPassword2(password2);
    },
    
    submitClicked: function() {
        var result = model.validate();
        if (result.error) {
            // TODO and WYLO 1 .... Display a popup like in Socrative.
        } else {
            // TODO and WYLO 2 .... Tell the model to send (POST) the registration to the /user/register API.
        }
    }
    
};

var controller = new RegisterController();
module.exports = controller;

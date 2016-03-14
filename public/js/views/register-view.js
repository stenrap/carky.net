var React         = require('react'),
    styles        = require('log-reg-styles'),
    LargeLogoView = React.createFactory(require('large-logo-view'));

var RegisterView = React.createClass({
    
    onEmailChange: function(event) {
        this.props.emailChanged(event.target.value);
    },

    onNameChange: function(event) {
        this.props.nameChanged(event.target.value);
    },

    onPassword1Change: function(event) {
        this.props.password1Changed(event.target.value);
    },

    onPassword2Change: function(event) {
        this.props.password2Changed(event.target.value);
    },
    
    render: function() {
        return React.DOM.div({
            children: [
                LargeLogoView({}),
                React.DOM.div({
                    className: styles.logRegOuter,
                    children: [
                        React.DOM.div({
                            className: styles.logRegContainer,
                            children: [
                                React.DOM.h3({
                                    className: styles.headerText,
                                    children: 'Create Account'
                                }),
                                React.DOM.input({
                                    autoFocus: true,
                                    placeholder: 'Email Address',
                                    type: 'text',
                                    onChange: this.onEmailChange
                                }),
                                React.DOM.input({
                                    placeholder: 'Display Name',
                                    type: 'text',
                                    onChange: this.onNameChange
                                }),
                                React.DOM.input({
                                    placeholder: 'Password',
                                    type: 'password',
                                    onChange: this.onPassword1Change
                                }),
                                React.DOM.input({
                                    placeholder: 'Confirm Password',
                                    type: 'password',
                                    onChange: this.onPassword2Change
                                }),
                                React.DOM.button({
                                    className: styles.submitButton,
                                    children: 'Submit',
                                    onClick: this.props.submitClicked
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
    
});

module.exports = RegisterView;

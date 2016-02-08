var React = require('react');

var LoginView = React.createClass({

    render: function() {
        return React.DOM.div({
            children: 'Hello, ' + this.props.name + '! Would you like to log in?',
            onClick: this.props.registerClicked
        })
    }

});

module.exports = LoginView;

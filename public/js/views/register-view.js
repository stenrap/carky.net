var React = require('react');

var RegisterView = React.createClass({
    
    // TODO and WYLO .... Get this view looking gorgeous (like your Java version), then test all the API work you did (i.e. regsiter a user).
    
    render: function() {
        return React.DOM.div({
            children: 'Hello, ' + this.props.name + '! Would you like to register?'
        })
    }
    
});

module.exports = RegisterView;

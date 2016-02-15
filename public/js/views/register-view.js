var React         = require('react'),
    LargeLogoView = React.createFactory(require('large-logo-view'));

var RegisterView = React.createClass({
    
    render: function() {
        return React.DOM.div({
            children: [
                LargeLogoView({})
            ]
        });
    }
    
});

module.exports = RegisterView;

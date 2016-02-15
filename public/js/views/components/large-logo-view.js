var React  = require('react'),
    styles = require('large-logo-styles');

var LargeLogoView = React.createClass({
    
    render: function() {
        return React.DOM.div({
            className: styles.largeLogoContainer,
            children: [
                React.DOM.div({
                    className: styles.largeLogoImage,
                    children: [
                        React.DOM.div({
                            className: styles.carkyText,
                            children: 'Carky'
                        })
                    ]
                })
            ]
        });
    }
    
});

module.exports = LargeLogoView;

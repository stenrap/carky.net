var Backbone = require('backbone');

var RegisterModel = Backbone.Model.extend({

    setEmail: function(email) {
        this.set('email', email);
    },
    
    getEmail: function() {
        return this.get('email');
    },

    setName: function(name) {
        this.set('name', name);
    },

    getName: function() {
        return this.get('name');
    },

    setPassword1: function(password1) {
        this.set('password1', password1);
    },

    getPassword1: function() {
        return this.get('password1');
    },

    setPassword2: function(password2) {
        this.set('password2', password2);
    },

    validate: function() {
        var result = {};
        if (!this.get('email')) {
            result.error = 'Please enter your email address.';
        } else if (!this.get('name')) {
            result.error = 'Please enter your name.';
        } else if (!this.has('password1') || this.get('password1').length < 8) {
            result.error = 'Your password must be at least 8 characters.';
        } else if (this.get('password1') !== this.get('password2')) {
            result.error = 'The passwords do not match.';
        } else {
            result.valid = true;
        }
        return result;
    }
    
});

module.exports = new RegisterModel();

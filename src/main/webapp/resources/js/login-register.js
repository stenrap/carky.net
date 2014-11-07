"use strict";
var CARKY = CARKY || {};
Backbone.View.prototype.eventAggregator = Backbone.View.prototype.eventAggregator || _.extend({}, Backbone.Events);
$(function() {

    CARKY.LoginView = Backbone.View.extend({

        events : {
            "click #create-account-button" : "onCreateAccountClick"
        },

        onCreateAccountClick : function() {
            this.eventAggregator.trigger('create-account');
        }

    });

    CARKY.RegisterView = Backbone.View.extend({

        initialize : function() {
            this.eventAggregator.on('create-account', this.onCreateAccountClicked);
        },

        onCreateAccountClicked : function() {
            console.log("Fancy a registration in this view, eh?");
        }

    });

    new CARKY.LoginView({
        el: "#login-form-container"
    });

    new CARKY.RegisterView({
        el: "#create-account-container"
    });

});
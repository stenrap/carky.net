"use strict";
var CARKY = CARKY || {};
Backbone.View.prototype.eventAggregator = Backbone.View.prototype.eventAggregator || _.extend({}, Backbone.Events);
$(function() {

    CARKY.LoginView = Backbone.View.extend({

        events : {
            "click #create-account-button" : "onCreateAccountClicked"
        },

        initialize : function() {
            this.eventAggregator.on('back-to-login', this.onBackClicked, this);
        },

        onCreateAccountClicked : function() {
            this.$el.hide();
            this.eventAggregator.trigger('create-account');
        },

        onBackClicked : function() {
            this.$el.fadeIn(375);
            $("#loginUsername").focus();
        }

    });

    CARKY.RegisterView = Backbone.View.extend({

        events : {
            "click #register-back" : "onBackClicked"
        },

        initialize : function() {
            this.eventAggregator.on('create-account', this.onCreateAccountClicked, this);
        },

        onCreateAccountClicked : function() {
            this.$el.fadeIn(375);
            $("#accountUsername").focus();
        },

        onBackClicked : function() {
            this.$el.hide();
            this.eventAggregator.trigger('back-to-login');
        }

    });

    new CARKY.LoginView({
        el: "#login-form-container"
    });

    new CARKY.RegisterView({
        el: "#create-account-container"
    });

});
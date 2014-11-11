"use strict";
var CARKY = CARKY || {};
Backbone.View.prototype.eventAggregator = Backbone.View.prototype.eventAggregator || _.extend({}, Backbone.Events);
$(function() {

    var checkingUsername = false;

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
            "click #register-back" : "onBackClicked",
            "keyup #accountUsername" : "checkUserName"
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
        },

        checkUserName : function(event) {
            if (!checkingUsername) {
                checkingUsername = true;
                window.setTimeout(function() {
                    var username = $(event.target).val();
                    // WYLO .... What if the username is empty or hasn't changed after the last key up (e.g. the user pressed the shift key)?
                    console.log("Checking username: "+username);
                    checkingUsername = false;
                }, 750);
            }
        }

    });

    new CARKY.LoginView({
        el: "#login-form-container"
    });

    new CARKY.RegisterView({
        el: "#create-account-container"
    });

});
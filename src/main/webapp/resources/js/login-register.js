"use strict";
var CARKY = CARKY || {};
Backbone.View.prototype.eventAggregator = Backbone.View.prototype.eventAggregator || _.extend({}, Backbone.Events);
$(function() {

    var timeOutId;
    var username = "";

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
            if (timeOutId) {
                window.clearTimeout(timeOutId);
            }
            timeOutId = window.setTimeout(function() {
                if (username.toLowerCase() !== $(event.target).val().toLowerCase() && $(event.target).val().length > 0) {
                    username = $(event.target).val().substring(0, 50);
                    // WYLO .... You're finally ready to see if Hibernate is working. Send this via $.ajax ...
                    console.log("Checking username: "+username);
                    var csrf = $("input[name=_csrf]").val();
                    $.ajax({
                        data : {"name" : username, "_csrf" : csrf},
                        type : "POST",
                        url  : "/register/check-name"
                    });
                }
            }, 750);
        }

    });

    new CARKY.LoginView({
        el: "#login-form-container"
    });

    new CARKY.RegisterView({
        el: "#create-account-container"
    });

});
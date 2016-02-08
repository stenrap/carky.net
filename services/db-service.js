var pg = require('pg').native;

module.exports = {

    init: function(dbConfig) {
        var username = dbConfig.get('username');
        var password = dbConfig.get('password');
        var hostname = dbConfig.get('hostname');
        var database = dbConfig.get('database');
        this.connectionString = 'postgres://'+username+':'+password+'@'+hostname+'/'+database;
        return this;
    },
    
    getUserByEmail: function(email, callback) {
        pg.connect(this.connectionString, function(err, client, done) {
            if (err) {
                callback('Error getting client connection: ' + err);
            } else {
                client.query({
                    name: 'get_user_by_email_query',
                    text: 'SELECT * FROM get_user_by_email($1)',
                    values: [email]
                },
                function (err, rawResult) {
                    if (err) {
                        callback('Error performing get_user_by_email() query: ' + err);
                    } else {
                        var result = {
                            id: null,
                            password: null,
                            display_name: null,
                            code: null
                        };
                        if (rawResult && rawResult.rows && rawResult.rows[0]) {
                            result.id = rawResult.rows[0].id;
                            result.password = rawResult.rows[0].password;
                            result.display_name = rawResult.rows[0].display_name;
                            result.code = rawResult.rows[0].code;
                        }
                        callback(null, result);
                    }
                    done();
                });
            }
        });
    },
    
    updateUserCode: function(code, email, callback) {
        pg.connect(this.connectionString, function(err, client, done) {
            if (err) {
                callback('Error getting client connection: ' + err);
            } else {
                client.query({
                    name: 'update_user_code_query',
                    text: 'SELECT update_user_code($1, $2)',
                    values: [code, email]
                },
                function (err) {
                    if (err) {
                        callback('Error performing update_user_code() query: ' + err);
                    } else {
                        callback(null);
                    }
                    done();
                });
            }
        });
    },
    
    registerUser: function(email, name, password, callback) {
        
    },
    
    end: function() {
        pg.end();
    }

};

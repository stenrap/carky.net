/*
    These tests are skipped because they actually talk
    to the database (so they're not really unit tests).
 */

var dbConfig = require('config').get('config.db');
var pg       = require('pg').native;
var expect   = require('chai').expect;

describe('The db service', function() {
    
    before(function() {
        this.timeout(0);
        this.dbService = require('../services/db-service').init(dbConfig);
        this.insertUser = function(doneCallback) {
            pg.connect(this.dbService.connectionString, function(err, client, done) {
                if (err) {
                    console.error('Error connecting to database:', err);
                    return;
                }
                client.query("INSERT INTO users (email, display_name, password, code) VALUES('foo@bar.com', 'Foo', 'password', '11111111-2222-3333-4444-555555555555')", function(err, result) {
                    if (err) {
                        console.error('Error inserting test user:', err);
                        return;
                    }
                    if (!result || !result.rowCount || result.rowCount != 1) {
                        console.error('Unknown error inserting test user.');
                    }
                    done();
                    doneCallback();
                });
            });
        };
        this.deleteUser = function(doneCallback) {
            pg.connect(this.dbService.connectionString, function(err, client, done) {
                if (err) {
                    console.error('Error connecting to database:', err);
                    return;
                }
                client.query("DELETE FROM users WHERE email = 'foo@bar.com'", function(err) {
                    if (err) {
                        console.error('Error deleting test user:', err);
                        return;
                    }
                    done();
                    doneCallback();
                });
            });
        };
    });
    
    describe('getUserByEmail()', function() {
        
        before(function(beforeDone) {
            this.insertUser(beforeDone);
        });
        
        it('should get a user\'s id, password, display_name, and code', function(itDone) {
            this.dbService.getUserByEmail('foo@bar.com', function(err, result) {
                if (err) {
                    console.error(err);
                }
                expect(result.password).to.equal('password');
                expect(result.display_name).to.equal('Foo');
                expect(result.code).to.equal('11111111-2222-3333-4444-555555555555');
                itDone();
            });
        });
        
        after(function(afterDone) {
            this.deleteUser(afterDone);
        });
        
    });

    after(function() {
        this.dbService.end();
    });
    
});

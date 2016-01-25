/*
    These tests are skipped because they actually talk to
    the database (so they're not actually unit tests).
 */

var dbConfig = require('config').get('config.db');
var pg       = require('pg').native;
var expect   = require('chai').expect;

describe.skip('The db service', function() {
    
    it('does something...');
    
});

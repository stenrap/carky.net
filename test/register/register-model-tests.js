var model = require('../../public/js/models/register-model.js'),
    sinon = require('sinon'),
    expect = require('chai').expect;

describe('The register model', function() {
    
    /*
        Methods wanted by RegisterController:
            
            tryRegister()  //  TODO and WYLO 2 .... After there's an API for registering, implement this!
        
     */
    
    afterEach(function() {
        model.clear();
    });
    
    describe('setEmail()', function() {
        
        it('should set the \'email\' property on the model', function() {
            model.setEmail('foo@bar.com');
            expect(model.get('email')).to.equal('foo@bar.com');
        });
        
    });
    
    describe('getEmail()', function() {
        
        it('should return the \'email\' property', function() {
            model.set('email', 'foo@bar.com');
            expect(model.getEmail()).to.equal('foo@bar.com');
        });
        
    });
    
    describe('setName()', function() {
        
        it('should set the \'name\' property on the model', function() {
            model.setName('rob');
            expect(model.get('name')).to.equal('rob');
        });
        
    });

    describe('getName()', function() {

        it('should return the \'name\' property', function() {
            model.set('name', 'Rob');
            expect(model.getName()).to.equal('Rob');
        });

    });
    
    describe('setPassword1()', function() {
        
        it('should set the \'password1\' property on the model', function() {
            model.setPassword1('password');
            expect(model.get('password1')).to.equal('password');
        });
        
    });

    describe('getPassword1()', function() {

        it('should return the \'password1\' property', function() {
            model.set('password1', 'password');
            expect(model.getPassword1()).to.equal('password');
        });

    });

    describe('setPassword2()', function() {

        it('should set the \'password2\' property on the model', function() {
            model.setPassword2('password');
            expect(model.get('password2')).to.equal('password');
        });

    });
    
    describe('validate()', function() {
        
        describe('should return an error', function() {
            
            it('when the \'email\' property is not set', function() {
                model.set('name', 'rob');
                model.set('password1', 'password');
                model.set('password2', 'password');
                var result = model.validate();
                expect(result.hasOwnProperty('error')).to.be.true;
            });

            it('when the \'name\' property is not set', function() {
                model.set('email', 'foo@bar.com');
                model.set('password1', 'password');
                model.set('password2', 'password');
                var result = model.validate();
                expect(result.hasOwnProperty('error')).to.be.true;
            });

            it('when the \'password1\' property is not 8 characters', function() {
                model.set('email', 'foo@bar.com');
                model.set('name', 'rob');
                model.set('password1', 'pass');
                model.set('password2', 'pass');
                var result = model.validate();
                expect(result.hasOwnProperty('error')).to.be.true;
            });

            it('when the \'password1\' and \'password2\' properties do not match', function() {
                model.set('email', 'foo@bar.com');
                model.set('name', 'rob');
                model.set('password1', 'passwordA');
                model.set('password2', 'passwordB');
                var result = model.validate();
                expect(result.hasOwnProperty('error')).to.be.true;
            });
            
        });
        
        describe('should return valid', function() {
            
            it('when all properties required for registration are valid', function() {
                model.set('email', 'foo@bar.com');
                model.set('name', 'rob');
                model.set('password1', 'password');
                model.set('password2', 'password');
                var result = model.validate();
                expect(result.hasOwnProperty('valid')).to.be.true;
            });
            
        });
        
    });
    
});

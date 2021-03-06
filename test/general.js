'use strict';

var expect = require('chai').expect;

var processout = require('..');
var client = new processout.ProcessOut('test-proj_gAO1Uu0ysZJvDuUpOGPkUBeE3pGalk3x', 
    'key_sandbox_mah31RDFqcDxmaS7MvhDbJfDJvjtsFTB');

describe('General', function() {
    it('should have the error code set', function(done) {
        client.newCustomer().find("bad").then(function(customer) {
            done('There should have been an error');
        }, function(err) {
            expect(err.code).to.equal('resource.customer.not-found');
            done();
        });
    });
});

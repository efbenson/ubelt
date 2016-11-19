'use strict';
const BbPromise = require('bluebird'), 
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

chai.should();

describe('<%= config.relativePath %><%= config.name %>.js', function() {
    const index = require('./<%= config.name %>.js');
    describe('#init()', function() {
        it('should resolve', function() {
            return index.init({},{eventHandler: {init: function() {return BbPromise.resolve();}}}).should.be.fulfilled;
        });
        it('should reject on missing config', function() {
            return index.init().should.be.rejectedWith(Error, '<%= config.relativePath %><%= config.name %>: missing config');
        });
    });
});
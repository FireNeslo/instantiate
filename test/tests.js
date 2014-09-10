var instantiate = require('..');
var expect = require('chai').expect;
var make, opts, cfg, cb, error;

function Class(name, options, config, callback, error) {
	this.name = name;
	this.options = options;
	this.config = config;
	this.callback = callback;
	this.error = error;
	this.other = Array.prototype.slice.call(arguments,5);
}

beforeEach(function() {
	make = instantiate(Class);
	opts = {};
	cfg  = {};
	cb   = function cb() {};
  error= function onError() {};
})

describe('instantiate', function() {
	it('should accept 0 arguments', function() {
		expect(make()).to.be.an.instanceof(Class);
	})
	it('should accept 1 argument', function() {
		var instance = make('first');
		expect(instance).to.be.an.instanceof(Class);
		expect(instance.name).to.equal('first');
	})
	it('should accept 2 arguments', function() {
		var instance = make('second', opts);
		expect(instance).to.be.an.instanceof(Class);
		expect(instance.name).to.equal('second');
		expect(instance.options).to.equal(opts);
	})
	it('should accept 3 arguments', function() {
		var instance = make('third', opts, cfg);
		expect(instance).to.be.an.instanceof(Class);
		expect(instance.name).to.equal('third');
		expect(instance.options).to.equal(opts);
		expect(instance.config).to.equal(cfg);
	})
	it('should accept 4 arguments', function() {
		var instance = make('fourth', opts, cfg, cb);
		expect(instance).to.be.an.instanceof(Class);
		expect(instance.name).to.equal('fourth');
		expect(instance.options).to.equal(opts);
		expect(instance.config).to.equal(cfg);
		expect(instance.callback).to.equal(cb);
	})
	it('should accept 5 arguments', function() {
		var instance = make('fifth', opts, cfg, cb, error);
		expect(instance).to.be.an.instanceof(Class);
		expect(instance.name).to.equal('fifth');
		expect(instance.options).to.equal(opts);
		expect(instance.config).to.equal(cfg);
		expect(instance.callback).to.equal(cb);
		expect(instance.error).to.equal(error);
	})
	it('should accept more than 5 arguments', function() {
		var instance = make('fifth', opts, cfg, cb, error, "more", "arguments");
		expect(instance).to.be.an.instanceof(Class);
		expect(instance.name).to.equal('fifth');
		expect(instance.options).to.equal(opts);
		expect(instance.config).to.equal(cfg);
		expect(instance.callback).to.equal(cb);
		expect(instance.error).to.equal(error);
		expect(instance.other[0]).to.equal("more");
		expect(instance.other[1]).to.equal("arguments");
	})
})
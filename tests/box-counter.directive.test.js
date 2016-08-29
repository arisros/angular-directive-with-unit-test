var chai = require('chai');
var expect = require('chai').expect;
var index = require('../js/box-directive.js');
var myWord = 'Test My Value';
console.log(index.a);
describe('Something', function() {
	it('add something', function () {
		expect(index.a).to.equal('a');
	});
});


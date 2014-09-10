var instantiate = require('..');

var Person = instantiate(
	function Person (name) {
		this.name = name;
	}
);

console.log(Person("Some Guy"));
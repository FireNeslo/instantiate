nslo-instantiate - v0.3.0
===
make a function that creates class instances
## Install
### npm
```bash
$ npm install FireNeslo/instantiate --save
```
### bower
```bash
$ bower install FireNeslo/instantiate --save
```
## Usage
```js
var instantiate = require('..');

var Person = instantiate(
	function Person (name) {
		this.name = name;
	}
);

console.log(Person("Some Guy"));
```
## Test
```bash
$ npm install -g mocha
$ npm test
```
##API

<!-- Start /home/fireneslo/Dropbox/nslo/instantiate/index.js -->

## instantiate(Class)

Author: fireneslo@gmail.com

### Params: 

* **function** *Class* - constructor function

### Return:

* **instantiate~instantiate** instantiate - create instance

creates an instance of a function

### Params: 

* **...*** *args* - any number of arguments to pass to constructor

<!-- End /home/fireneslo/Dropbox/nslo/instantiate/index.js -->


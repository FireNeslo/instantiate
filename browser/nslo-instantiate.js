!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.nsloInstantiate=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @module nslo-instantiate
 * @description Create an instantiate function
 * @author fireneslo@gmail.com
 * @param {function} Class - constructor function
 * @return {instantiate~instantiate} instantiate - create instance
**/
function instantiate(Class) {'use strict';
	function create(args) {
		var instance = Object.create(Class.prototype);
		Class.apply(instance, args);
		return instance;
	}
	/**
	* creates an instance of a function
	* @param {...*} args - any number of arguments to pass to constructor
	**/
	return function instantiate($0,$1,$2,$3,$4) {
		switch(arguments.length) {
			case 0: return new Class();
			case 1: return new Class($0);
			case 2: return new Class($0,$1);
			case 3: return new Class($0,$1,$2);
			case 4: return new Class($0,$1,$2,$3);
			case 5: return new Class($0,$1,$2,$3,$4);
			default:
			var args = new Array(arguments.length);
			for(var i = 0; i < args.length; ++i) args[i] = arguments[i];
			return create(args);
		}
	};
}

module.exports = instantiate;
},{}]},{},[1])(1)
});
//# sourceMappingURL=nslo-instantiate.js.map
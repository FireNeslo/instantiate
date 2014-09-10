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
// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var type = typeof obj;
  if (type === 'function' || type === 'undefined') {
  	return undefined;
  } else if (obj === null) {
  	return 'null';
  } else if (type === 'boolean' || type === 'number') {
  	return obj.toString();
  } else if (Array.isArray(obj)) {
  	var map = obj.map(function(element) {
  		return stringifyJSON(element);
  	});
  	return '[' + map.toString() + ']';
  } else if (type === 'string') {
  	return '\"' + obj + '\"';
  } else {
  	var result = [];
  	for (var key in obj) {
  		var keyString = stringifyJSON(key);
  		var valueString = stringifyJSON(obj[key]); 
  		if (keyString !== undefined && valueString !== undefined) {
  			result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
  		}
  	}
  	return '{' + result.join(',') + '}';
  }

  // your code goes here
};

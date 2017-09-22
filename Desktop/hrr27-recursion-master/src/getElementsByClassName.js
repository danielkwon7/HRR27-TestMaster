// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  function findElements(start) {
  	var result = [];
  	var list = start.classList;
  	if (list) {
  		if (list.contains(className)) {
  			result.push(start);
  		}
  	}
  	var nodes = start.childNodes;
  	if (nodes) {
  		for (var i = 0; i < nodes.length; i++) {
  			result = result.concat(findElements(nodes[i]));
  		}
  	}
	return result;
  }
  return findElements(document.body);
  // return result;
  // return findElements(document.body);
  
  // your code here
};

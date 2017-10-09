// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var getMatches = function(element) {
    var matches = [];
    var nodes = element.childNodes;
    var list = element.classList;
    if (list) {
      if (list.contains(className)) {
        matches.push(element);
      }
    }
    for (var i = 0; i < nodes.length; i++) {
      matches = matches.concat(getMatches(nodes[i]));
    }
   return matches;
  }
  return getMatches(document.body);
};


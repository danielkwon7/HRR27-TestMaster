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
        result.push(keyString + ':' + valueString);
      }
    }
    return '{' + result.join(',') + '}';
  }

  // your code goes here
};

//   //   var result = [];
//   //   Object.keys(obj).forEach(function(x) {
//   //     var y = obj[x];
//   //     if(typeof y !== "function" && y !== undefined) {
//   //       result.push('"' + x + '":' + stringifyJSON(y));
//   //     }
//   //   });
//   //   return "{" + result.toString() + "}";
//   // }
// };


// var stringifyJSON = function(obj) {
//    if (typeof obj === "function") {
//     return null;
//    } else if (obj === undefined) {
//     return null;
//    } else if (obj === null) {
//     return "null";
//    } else if (typeof obj === "number") {
//     return obj.toString();
//    } else if (typeof obj === "string") {
//     return '"' + obj + '"';
//    } else if (typeof obj === "boolean") {
//     return "" + obj;
//    } else if (Array.isArray(obj)) {
//     var arrayResult = [];
//     obj.forEach(function(x) {
//       arrayResult.push(stringifyJSON(x))
//     });
//     return "[" + arrayResult.join(',') + "]"
//    } else
//     var objResult = [];
//     Object.keys(obj).forEach(function(x) {
//       var y = obj[x];
//       if(typeof y !== "function" && y !== undefined) {
//         objResult.push('"' + x + '":' + stringifyJSON(y));
//       }
//     });
//     return "{" + objResult.join(',') + "}";
// };


// var obj = {a: function add(n1, n2) { return n1 + n2; }}
// JSON.stringify(obj) // ==> '{}'
// } else
//     // object
//     var objResult = [];
//     Object.keys(obj).forEach(function(x) {
//       var y = obj[x];
//       {
//         objResult.push('"' + x + '":' + stringifyJSON(y));
//       }
//     });
//     return "{" + objResult.join(',') + "}";
// };

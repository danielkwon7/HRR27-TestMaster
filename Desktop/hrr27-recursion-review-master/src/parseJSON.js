// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // "'ben'" -> 'ben'// your code goes here
  if (json.split('')[0] === '\'') {
    return json.slice(1,json.length-1);
  // number
  } else if (Number.parseInt(json)){
    return Number.parseInt(json);
  // null
  } else if (json === 'null') {
    return null;
  } else if (json === undefined) {
    return undefined;
  } else if (json.split(''[0] === '[ ') {
    var clean = json.split('').filter(function(x) {
      return x !== '[' || x !== ']';
    })
    return clean.split(',');
  }
}


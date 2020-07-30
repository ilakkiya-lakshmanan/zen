const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

var x=function removeDups(names) {
  let unique = {};
  names.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return console.log(Object.keys(unique));
}

x(names);
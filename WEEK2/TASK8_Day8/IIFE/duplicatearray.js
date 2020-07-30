let names = ['John', 'Paul', 'George', 'Ringo', 'John'];

(function removeDups(names) {
  let unique = {};
  names.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return console.log(Object.keys(unique));
})(names);
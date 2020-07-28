var obj = {name : "RajiniKanth", age : 33, hasPets : false};
var array=[];
function printAllKeys(obj) {
    for (const property in obj) {
        array.push(property);
      }
      console.log(array);

}
printAllKeys(obj);
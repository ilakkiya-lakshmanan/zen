var obj = {name : "RajiniKanth", age : 33, hasPets : false};
var array=[];
function printAllValues(obj) {
    for (const property in obj) {
        array.push(obj[property]);
      }
      console.log(array);

}
printAllValues(obj);
var obj = {name: "ISRO", age: 35, role: "Scientist"};
let array=[];
function convertListToObject(obj) {
    
    for (const property in obj) {
        var list=[];
        list.push(property,obj[property]);
        array.push(list);
      }
    
      console.log(array);
 // your code here
}
convertListToObject(obj);
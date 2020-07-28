var arr = ["GUVI", "I", "am", "a geek"];
var key=arr[0];
function transformFirstAndLast(arr) {
 var newObject={};
 newObject[arr[0]]=arr[arr.length-1];
 return newObject;

}
let result=transformFirstAndLast(arr);
console.log(result);
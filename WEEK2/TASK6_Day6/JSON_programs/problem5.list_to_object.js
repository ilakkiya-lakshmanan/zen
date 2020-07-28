var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];


function fromListToObject(arr) {
 var newObject = {};
 for(var i in arr)
 {
     for(let j=0;j<arr[i].length;j+=2)
     {

        newObject[arr[i][j]]=arr[i][j+1];
        
     
     }
 }
 return newObject;
}
var result=fromListToObject(arr);
console.log(result);
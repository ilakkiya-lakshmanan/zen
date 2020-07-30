var arr1=[1,2,3,4,5];
var arr2=[6,7,8,9,10];
(function(arr1,arr2)
{
sarr=arr1.sort();
tarr=arr2.sort();
length=Math.round((arr1.length)/2);
console.log(length);
let median=[];
median.push(arr1[length]);
median.push(arr2[length]);
return console.log(median);
})(arr1,arr2);

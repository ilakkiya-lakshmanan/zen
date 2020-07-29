function getPositives(ar)
{
 // your code here
 var array=[];
 for(var i=0;i<ar.length;i++)
 {
     if(ar[i]>=0)
     {
         array.push(ar[i]);
     }
 }
 return array;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);
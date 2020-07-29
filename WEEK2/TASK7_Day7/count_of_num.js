var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
 function countPositivesSumNegatives(arr) {
    var ar2=[];
    var count=0;
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
       
        if(arr[i]>=0)
        {
           count++; 
        }
        else
        {
            sum=sum+arr[i];
        }
      
    }
    ar2.push(count);
    ar2.push(sum);
 return ar2;
}
console.log(countPositivesSumNegatives(arr.join(" ")));
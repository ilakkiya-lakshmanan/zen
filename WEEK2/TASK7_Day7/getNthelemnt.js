function getNthElement(array,n){
    // your code here
    var length=array.length;
    if(length>0)
    {
        var result=array[n];
    }
    else
    {
     result=0;
    }
    return result;
   }
   console.log(getNthElement([1,2,3],1));

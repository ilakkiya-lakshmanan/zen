function isEven(num){
    if(Number.isInteger(num))
{
    if(num%2==0)
    {
        return true;
    }
    else{
        return false;
    }
}
else 
{
    return -1;
}
   }
   var even = isEven("5a");
   console.log(even);
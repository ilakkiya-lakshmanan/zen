function getLastElement(array)
{
    var last=array.length-1;
    if(last>0)
    {
    return array[last]
    }
    else
    {
        return -1
    }
   }
   console.log(getLastElement([1,2,3,4]));
var obj = {
    mykey: "name",
    yourkey:"name1"

   };
function removeProperty(obj, mykey)
{
    // your code here
    delete obj.mykey;
    return obj;
   }
console.log(removeProperty(obj,"mykey"));
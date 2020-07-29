var obj = {
    mykey: "value"
   };
   function getProperty(obj, key) {
    var result=obj.mykey;
    return result;
   }
 console.log( getProperty(obj,"mykey"));

var expected = {foo: 5, bar: 7};
var actual = {foo: 5, bar: 6};
function assertObjectsEqual(actual, expected, testName)
{
 var data1=JSON.stringify(expected);
 var data2=JSON.stringify(actual);
 if(data1===data2)
 {
     console.log("Passed");
 }
 else{
     console.log("FAILED  ["+testName+"] Expected ",expected,"but got ",actual);
 }
}
assertObjectsEqual(actual,expected,"mytest");
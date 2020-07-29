var result=sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9")
function sumCSV(s)
{
  // your code here
  
  
  
  var data=s.split(",");
  //console.log(data);
  
  let sum=0;
  for(var i=0;i<data.length;i++)
  {

sum=sum+parseFloat(data[i]);
  }
  return sum;
}

console.log(result);

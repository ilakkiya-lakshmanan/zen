//var operation=[add,sub,mul];
function something(index,operation)
{
    let v1=10,v2=5;
   return operation[index](v1,v2);


}
function add(v1,v2)
{
    //console.log("hi",v1,v2);
    return v1+v2;
}
function sub(v1,v2)
{
    return v1-v2;
}
function mul(v1,v2)
{
    return v1*v2;
}
var operation=[add,sub,mul];
var www=something(0,operation);
console.log(www);
var abc=something(1,operation);
console.log(abc);
var xyz=something(2,operation);
console.log(xyz);

function lessThan100(num1,num2) {
    let add=num1+num2;
    if(add<100)
    {
        return true;
    }
    else{
        return false;
    }
}
var res = lessThan100(22,15)
console.log(res);
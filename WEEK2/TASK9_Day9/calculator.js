class Calculator
{
    constructor(num1,num2)
    {
        this.num1=num1;
        this.num2=num2;
    }

add()
{
    console.log(this.num1+this.num2);
}
Sub()
{
    console.log(this.num1-this.num2);
}
Multiply()
{
    console.log(this.num1*this.num2);
}
divide()
{
    console.log(this.num1/this.num2);
}
}
let object=new Calculator(10,5);
object.add();
object.Sub();
object.Multiply();
object.divide();